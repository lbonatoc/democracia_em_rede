import dadosMockados from "./mock-data.js";

(function clientMain() {
    "use strict";
    const D = dadosMockados;
    const page = document.body.dataset.page;
    const app = document.getElementById("app");
    const qs = new URLSearchParams(location.search);
    const esc = (v) => String(v ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
    const norm = (v) => String(v ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const initials = (v) => v.split(" ").slice(0, 2).map((x) => x[0]).join("").toUpperCase();
    const date = (v) => new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(new Date(v + (v.length === 10 ? "T12:00:00" : "")));
    const dateTime = (v) => new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(v));
    const dep = (id) => D.deputados.dados.find((x) => x.id === Number(id));
    const prop = (id) => D.proposicoes.dados.find((x) => x.id === Number(id));
    const voting = (id) => D.votacoes.dados.find((x) => x.id === id);
    const crumbs = (items) => '<nav class="crumb" aria-label="Navegação estrutural">' + items.map((x, i) => i === items.length - 1 ? '<span aria-current="page">' + esc(x.label) + '</span>' : '<a href="' + x.url + '">' + esc(x.label) + '</a><span aria-hidden="true">›</span>').join("") + '</nav>';
    const tag = (v) => '<span class="tag">' + esc(v) + '</span>';
    const origin = () => '<p class="origin">Fonte estrutural: API de Dados Abertos da Câmara · Dados demonstrativos · Atualizado em ' + esc(D.meta.atualizadoEm) + '</p>';
    const state = (title, text, action = "") => '<div class="state" role="status"><b aria-hidden="true">i</b><h2>' + esc(title) + '</h2><p>' + esc(text) + '</p>' + action + '</div>';
    const status = (v) => '<span class="status' + (v === "Exercício" ? "" : " alt") + '">' + esc(v) + '</span>';
    const compareIds = () => { try { return JSON.parse(localStorage.getItem("dr_compare") || "[]").map(Number).filter(Boolean).slice(0, 2); } catch { return []; } };
    const saveCompare = (ids) => { localStorage.setItem("dr_compare", JSON.stringify(ids.slice(0, 2))); renderCompareBar(); };

    function toast(message) {
        const el = document.getElementById("toast");
        el.textContent = message;
        el.classList.add("show");
        clearTimeout(toast.timer);
        toast.timer = setTimeout(() => el.classList.remove("show"), 2600);
    }

    function repCard(x) {
        const selected = compareIds().includes(x.id);
        return '<article class="rep"><div class="rep-top"><div class="avatar" aria-hidden="true">' + initials(x.nomeEleitoral) + '</div><div><h3>' + esc(x.nomeEleitoral) + '</h3><p class="muted">' + esc(x.siglaPartido + " · " + x.siglaUf) + '</p></div></div><div class="rep-body"><div class="meta"><span>Legislatura</span><strong>' + x.idLegislatura + 'ª</strong></div><div class="meta"><span>Situação</span>' + status(x.situacao) + '</div><div class="meta"><span>Condição</span><strong>' + esc(x.condicaoEleitoral) + '</strong></div></div><div class="actions"><a class="button small" href="perfil?id=' + x.id + '">Ver perfil</a><button class="button secondary small compare-toggle" data-id="' + x.id + '" aria-pressed="' + selected + '" type="button">' + (selected ? "Remover" : "Comparar") + '</button></div></article>';
    }
    function toggleCompare(id) {
        const ids = compareIds();
        if (ids.includes(id)) { saveCompare(ids.filter((x) => x !== id)); toast("Representante removido da comparação."); }
        else if (ids.length === 2) toast("A comparação aceita no máximo dois representantes.");
        else { saveCompare([...ids, id]); toast("Representante adicionado à comparação."); }
        document.querySelectorAll('.compare-toggle[data-id="' + id + '"]').forEach((b) => { const active = compareIds().includes(id); b.textContent = active ? "Remover" : "Comparar"; b.setAttribute("aria-pressed", active); });
    }
    function renderCompareBar() {
        const bar = document.getElementById("compare-bar"); const ids = compareIds();
        if (!ids.length) { bar.hidden = true; return; }
        const people = ids.map(dep).filter(Boolean); bar.hidden = false;
        bar.innerHTML = '<span class="compare-label">Comparação</span><div class="chips">' + people.map((x) => '<span class="chip">' + esc(x.nomeEleitoral) + '<button data-remove="' + x.id + '" aria-label="Remover ' + esc(x.nomeEleitoral) + '">×</button></span>').join("") + '</div><a class="button warning small" href="comparacao">Comparar ' + people.length + '/2</a>';
    }
    function bindCompare() { document.querySelectorAll(".compare-toggle").forEach((b) => b.addEventListener("click", () => toggleCompare(Number(b.dataset.id)))); renderCompareBar(); }
    document.addEventListener("click", (e) => { const b = e.target.closest("[data-remove]"); if (b) toggleCompare(Number(b.dataset.remove)); });

    function renderHome() {
        app.innerHTML = '<section class="hero"><div class="container hero-grid"><div><p class="eyebrow" style="color:#8ec1ff">Transparência para todos</p><h1>Entenda a atuação dos seus representantes</h1><p class="lead">Informações parlamentares organizadas para quem quer acompanhar a democracia sem dominar a linguagem legislativa.</p><form class="hero-search" id="home-search"><label class="sr-only" for="home-q">Nome do representante</label><input id="home-q" name="q" placeholder="Digite o nome de um representante"><button>Consultar</button></form><p class="hero-note">Protótipo acadêmico com dados demonstrativos no formato da API da Câmara.</p></div><aside class="preview"><div class="preview-head"><h2>Do dado bruto à compreensão</h2><span class="api">Fonte oficial</span></div><div class="mini"><div class="mini-top"><div class="avatar">AM</div><div><strong>Perfil parlamentar</strong><p>Identificação, atuação e participação</p></div></div></div><div class="mini"><strong>Informação contextualizada</strong><p>Termos legislativos recebem explicações curtas e linguagem acessível.</p></div></aside></div></section>' +
            '<section class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">Uma consulta em três passos</p><h2>Acompanhe sem se perder nos dados</h2></div><p>A proposta conecta informações públicas, organização visual e explicações para apoiar a leitura cidadã.</p></div><div class="feature-grid"><article class="feature"><b>1</b><h3>Consulte representantes</h3><p>Pesquise por nome, partido, estado ou legislatura.</p></article><article class="feature"><b>2</b><h3>Acompanhe a atuação</h3><p>Veja proposições, votações, eventos e órgãos por categorias.</p></article><article class="feature"><b>3</b><h3>Entenda os termos</h3><p>Consulte explicações sem sair do fluxo da informação.</p></article></div></div></section>' +
            '<section class="section white"><div class="container"><div class="section-head"><div><p class="eyebrow">Consulta inicial</p><h2>Perfis demonstrativos</h2></div><a href="representantes">Ver todos →</a></div><div class="card-grid">' + D.deputados.dados.slice(0, 3).map(repCard).join("") + '</div></div></section>' +
            '<section class="section"><div class="container"><div class="source"><div class="source-icon">API</div><div><h2>Dados com origem identificada</h2><p>A estrutura está preparada para os retornos da API oficial da Câmara.</p></div><a class="button warning" target="_blank" rel="noreferrer" href="https://dadosabertos.camara.leg.br/swagger/api.html">Conhecer a fonte</a></div></div></section>' +
            '<section class="section white"><div class="container"><p class="eyebrow">Apoio à interpretação</p><h2>O que significa tramitação, PEC ou votação nominal?</h2><p class="lead">O glossário evita que a linguagem institucional se torne uma barreira.</p><a class="button" href="glossario">Abrir glossário</a></div></section>';
        document.getElementById("home-search").addEventListener("submit", (e) => { e.preventDefault(); location.href = "representantes?q=" + encodeURIComponent(new FormData(e.currentTarget).get("q")); }); bindCompare();
    }

    function renderRepresentantes() {
        app.innerHTML = '<div class="container page">' + crumbs([{ label: "Início", url: "/" }, { label: "Representantes" }]) + '<p class="eyebrow">Consulta parlamentar</p><h1 style="font-size:clamp(2.2rem,4vw,3.5rem)">Representantes</h1><p class="lead">Localize perfis e explore informações demonstrativas organizadas conforme os Dados Abertos da Câmara.</p><form class="filters" id="filters"><div class="filter-grid"><div class="field"><label for="rep-q">Nome</label><input id="rep-q" name="q" value="' + esc(qs.get("q") || "") + '" placeholder="Ex.: Ana Martins"></div><div class="field"><label for="party">Partido</label><select id="party" name="party"><option value="">Todos</option></select></div><div class="field"><label for="uf">Estado</label><select id="uf" name="uf"><option value="">Todos</option></select></div><div class="field"><label for="leg">Legislatura</label><select id="leg" name="leg"><option value="">Todas</option></select></div></div><div class="filter-actions"><div class="field"><label for="sort">Ordenar por</label><select id="sort" name="sort"><option value="nome">Nome</option><option value="partido">Partido</option><option value="uf">Estado</option></select></div><button class="button secondary" type="reset">Limpar filtros</button></div></form><p class="results-meta" id="results-meta" aria-live="polite"></p><div id="results"><div class="skeleton-grid"><div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div></div></div><nav class="pagination" id="pagination" aria-label="Paginação"></nav>' + origin() + '</div>';
        const form = document.getElementById("filters");
        const addOptions = (name, vals) => vals.forEach((v) => form.elements[name].insertAdjacentHTML("beforeend", '<option value="' + esc(v) + '">' + esc(v) + (name === "leg" ? "ª" : "") + '</option>'));
        addOptions("party", [...new Set(D.deputados.dados.map((x) => x.siglaPartido))].sort()); addOptions("uf", [...new Set(D.deputados.dados.map((x) => x.siglaUf))].sort()); addOptions("leg", [...new Set(D.deputados.dados.map((x) => x.idLegislatura))].sort().reverse());
        let current = 1; const perPage = 6;
        function update() {
            const f = new FormData(form); const search = norm(f.get("q"));
            let rows = D.deputados.dados.filter((x) => (!search || norm(x.nomeEleitoral + " " + x.nomeCivil).includes(search)) && (!f.get("party") || x.siglaPartido === f.get("party")) && (!f.get("uf") || x.siglaUf === f.get("uf")) && (!f.get("leg") || String(x.idLegislatura) === f.get("leg")));
            const field = f.get("sort") === "partido" ? "siglaPartido" : f.get("sort") === "uf" ? "siglaUf" : "nomeEleitoral"; rows.sort((a, b) => a[field].localeCompare(b[field], "pt-BR"));
            const pages = Math.max(1, Math.ceil(rows.length / perPage)); current = Math.min(current, pages); const shown = rows.slice((current - 1) * perPage, current * perPage);
            document.getElementById("results-meta").textContent = rows.length + (rows.length === 1 ? " representante encontrado" : " representantes encontrados");
            document.getElementById("results").innerHTML = rows.length ? '<div class="card-grid">' + shown.map(repCard).join("") + '</div>' : state("Nenhum representante encontrado", "Altere ou limpe os filtros para ver outros resultados.", '<button class="button secondary" id="empty-reset">Limpar filtros</button>');
            const pag = document.getElementById("pagination"); pag.innerHTML = rows.length > perPage ? Array.from({ length: pages }, (_, i) => '<button data-page="' + (i + 1) + '" aria-current="' + (current === i + 1 ? "page" : "false") + '">' + (i + 1) + '</button>').join("") : "";
            pag.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => { current = Number(b.dataset.page); update(); scrollTo({ top: 150, behavior: "smooth" }); })); document.querySelectorAll(".compare-toggle").forEach((b) => b.addEventListener("click", () => toggleCompare(Number(b.dataset.id)))); document.getElementById("empty-reset")?.addEventListener("click", () => { form.reset(); current = 1; update(); });
        }
        form.addEventListener("input", () => { current = 1; update(); }); form.addEventListener("reset", () => setTimeout(() => { current = 1; update(); }, 0)); setTimeout(update, 220); renderCompareBar();
    }

    const propCard = (x) => '<article class="record"><div class="record-head"><span class="record-code">' + x.siglaTipo + ' ' + x.numero + '/' + x.ano + '</span>' + tag(x.descricaoSituacao) + '</div><h3>' + esc(x.ementa) + '</h3><p>' + esc(x.explicacao) + '</p><div class="record-meta"><span>' + date(x.dataApresentacao) + '</span><span>' + esc(x.orgaoAtual) + '</span></div><p style="margin:.8rem 0 0"><a href="proposicao?id=' + x.id + '">Ver detalhes e tramitação →</a></p></article>';
    const voteCard = (x, repId) => { const own = x.votos.find((v) => v.deputadoId === repId); return '<article class="record"><div class="record-head"><span class="record-code">' + esc(x.proposicaoObjeto) + '</span>' + tag(x.resultado) + '</div><h3>' + esc(x.descricao) + '</h3><div class="record-meta"><span>' + date(x.data) + '</span><span>Órgão: ' + esc(x.siglaOrgao) + '</span><span>' + (own ? "Voto registrado: " + esc(own.tipoVoto) : "Sem voto nominal localizado") + '</span></div><p style="margin:.8rem 0 0"><a href="votacao?id=' + encodeURIComponent(x.id) + '">Consultar votação →</a></p></article>'; };

    function renderPerfil() {
        const x = dep(qs.get("id") || 101);

        if (!x) {
            app.innerHTML = '<div class="container page">' +
                state(
                    "Perfil não encontrado",
                    "O identificador informado não corresponde a um perfil demonstrativo.",
                    '<a class="button" href="representantes">Voltar</a>'
                ) +
                '</div>';
            bindCompare();
            return;
        }
        const props = D.proposicoes.dados.filter((p) => p.autorIds.includes(x.id));
        const votes = D.votacoes.dados.filter((v) => v.votos.some((r) => r.deputadoId === x.id));
        const events = D.eventos.dados.filter((e) => e.deputadoIds.includes(x.id)); const orgs = D.orgaos.dados.filter((o) => o.membros.some((m) => m.deputadoId === x.id));
        app.innerHTML = '<div class="container page">' +
            crumbs([
                { label: "Início", url: "/" },
                {
                    label: "Representantes",
                    url: "representantes"
                },
                { label: x.nomeEleitoral }
            ]) +
            '<section class="profile"><div class="avatar lg">' +
            initials(x.nomeEleitoral) +
            '</div><div><p class="eyebrow">Perfil parlamentar demonstrativo</p><h1>' +
            esc(x.nomeEleitoral) +
            '</h1><p class="lead">' +
            esc(x.nomeCivil) +
            '</p><div class="tags">' +
            tag(x.siglaPartido + " · " + x.siglaUf) +
            tag(x.idLegislatura + "ª Legislatura") +
            status(x.situacao) + '</div>' +
            origin() +
            '</div><button class="button secondary compare-toggle" data-id="' +
            x.id +
            '">' +
            (compareIds().includes(x.id) ? "Remover da comparação" : "Adicionar à comparação") +
            '</button></section><section class="tabs-wrap"><div class="tabs" role="tablist" aria-label="Dados do representante">' +
            [
                ["geral", "Visão geral"],
                ["proposicoes", "Proposições"],
                ["votacoes", "Votações"],
                ["participacao", "Presença e participação"],
                ["orgaos", "Órgãos e comissões"]
            ].map((t, i) => '<button class="tab" role="tab" id="tab-' + t[0] + '" data-tab="' + t[0] + '" aria-selected="' + (i === 0) + '" aria-controls="panel-' + t[0] + '">' + t[1] + '</button>').join("") + '</div>' +
            '<div class="panel-tab" id="panel-geral" role="tabpanel" aria-labelledby="tab-geral"><div class="stats"><div class="stat"><strong>' + props.length + '</strong><span>proposições vinculadas</span></div><div class="stat"><strong>' + votes.length + '</strong><span>votações localizadas</span></div><div class="stat"><strong>' + events.length + '</strong><span>eventos com participação</span></div><div class="stat"><strong>' + orgs.length + '</strong><span>órgãos e comissões</span></div></div><div class="caution" style="margin-top:1rem"><strong>Como interpretar:</strong> os números são registros deste recorte demonstrativo, não uma nota ou ranking.</div><div class="info-grid"><article class="info"><h2>Informações gerais</h2><dl><dt>Condição eleitoral</dt><dd>' + esc(x.condicaoEleitoral) + '</dd><dt>Escolaridade</dt><dd>' + esc(x.escolaridade) + '</dd><dt>E-mail</dt><dd>' + esc(x.email) + '</dd></dl></article><article class="info"><h2>Gabinete</h2><dl><dt>Número</dt><dd>' + esc(x.gabinete.nome) + '</dd><dt>Local</dt><dd>' + esc(x.gabinete.predio + ", " + x.gabinete.andar + "º andar") + '</dd><dt>Telefone</dt><dd>' + esc(x.gabinete.telefone) + '</dd></dl></article></div></div>' +
            '<div class="panel-tab" id="panel-proposicoes" role="tabpanel" aria-labelledby="tab-proposicoes" hidden><div class="inline-filter"><div class="field"><label for="prop-type">Tipo</label><select id="prop-type"><option value="">Todos</option></select></div><div class="field"><label for="prop-year">Ano</label><select id="prop-year"><option value="">Todos</option></select></div><div class="field"><label for="prop-status">Situação</label><select id="prop-status"><option value="">Todas</option></select></div></div><div class="stack" id="profile-props"></div></div>' +
            '<div class="panel-tab" id="panel-votacoes" role="tabpanel" aria-labelledby="tab-votacoes" hidden><div class="caution" style="margin-bottom:1rem">Nem todas as votações possuem registros nominais disponíveis.</div><div class="stack">' + (votes.length ? votes.map((v) => voteCard(v, x.id)).join("") : state("Nenhuma votação localizada", "Não há registros nominais neste conjunto demonstrativo.")) + '</div></div>' +
            '<div class="panel-tab" id="panel-participacao" role="tabpanel" aria-labelledby="tab-participacao" hidden><div class="caution" style="margin-bottom:1rem">Participação em eventos não deve ser usada isoladamente como indicador de desempenho.</div><div class="timeline">' + events.map((e) => '<article class="timeline-item"><time>' + dateTime(e.dataHoraInicio) + '</time><h3>' + esc(e.descricaoTipo + " · " + e.descricao) + '</h3><p>' + esc(e.orgaos.join(", ") + " · " + e.localCamara + " · " + e.situacao) + '</p></article>').join("") + '</div></div>' +
            '<div class="panel-tab" id="panel-orgaos" role="tabpanel" aria-labelledby="tab-orgaos" hidden><div class="stack">' + orgs.map((o) => { const m = o.membros.find((m) => m.deputadoId === x.id); return '<article class="record"><span class="record-code">' + esc(o.sigla) + '</span><h3>' + esc(o.nome) + '</h3><div class="record-meta"><span>Participação: <strong>' + esc(m.titulo) + '</strong></span><span>Período demonstrativo: 2026</span></div></article>'; }).join("") + '</div></div></section></div>';
        const tabs = [...document.querySelectorAll("[role=tab]")];
        const activate = (b) => tabs.forEach((t) => {
            const on = t === b;
            t.setAttribute("aria-selected", on);
            document.getElementById("panel-" + t.dataset.tab).hidden = !on;
        });

        tabs.forEach((b, i) => {
            b.addEventListener("click", () => activate(b));
            b.addEventListener("keydown", (e) => {
                if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
                e.preventDefault();
                const n = e.key === "ArrowRight" ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
                tabs[n].focus();
                activate(tabs[n]);
            });
        });

        const fs = {
            type: document.getElementById("prop-type"),
            year: document.getElementById("prop-year"),
            status: document.getElementById("prop-status")
        };

        const add = (el, vals) => vals.forEach((v) => el.insertAdjacentHTML("beforeend", '<option>' + esc(v) + '</option>'));

        add(fs.type, [...new Set(props.map((p) => p.siglaTipo))]);
        add(fs.year, [...new Set(props.map((p) => p.ano))]);
        add(fs.status, [...new Set(props.map((p) => p.descricaoSituacao))]);

        const update = () => {
            const rows = props.filter((p) => (!fs.type.value || p.siglaTipo === fs.type.value) && (!fs.year.value || String(p.ano) === fs.year.value) && (!fs.status.value || p.descricaoSituacao === fs.status.value));
            document.getElementById("profile-props").innerHTML = rows.length ? rows.map(propCard).join("") : state("Nenhuma proposição encontrada", "Altere os filtros.");
        };

        Object.values(fs).forEach((f) => f.addEventListener("change", update));

        update();
        bindCompare();
    }

    function definition(term) {
        const x = D.glossario.find((g) => norm(g.termo).startsWith(norm(term)));
        return '<button class="term" data-definition="' + esc(x?.definicao || "") + '">' + esc(term) + '</button>';
    }

    function renderProposicao() {
        const x = prop(qs.get("id") || 2001); if (!x) {
            app.innerHTML = '<div class="container page">' + state("Proposição não encontrada", "O registro solicitado não existe.", '<a class="button" href="representantes">Voltar</a>') + '</div>';
            return;
        }

        const authors = x.autorIds.map(dep).filter(Boolean);
        const votes = D.votacoes.dados.filter((v) => v.proposicaoId === x.id);
        app.innerHTML = '<div class="container page">' + 
            crumbs(
                [
                    { label: "Início", url: "/" },
                    { label: "Representantes", url: "representantes" },
                    { label: x.siglaTipo + " " + x.numero + "/" + x.ano }
                ]
            ) + 
            '<p class="eyebrow">Detalhes da proposição</p><h1 style="font-size:clamp(2.2rem,4vw,3.8rem)">' +
            x.siglaTipo +
            ' ' +
            x.numero +
            '/' +
            x.ano +
            '</h1><p class="lead">' + 
            esc(x.ementa) + 
            '</p>' + 
            origin() + 
            '<div class="detail" style="margin-top:1.5rem"><div class="detail-main"><section class="panel"><h2>Em linguagem simples</h2><div class="explain">' +
            esc(x.explicacao) +
            '</div><p style="margin-top:1rem"><strong>Texto oficial resumido:</strong> ' +
            esc(x.ementaDetalhada) +
            '</p></section><section class="panel"><h2>' +
            definition("Tramitação") +
            '</h2><div class="timeline">' +
            x.tramitacoes.map(
                (t) => '<article class="timeline-item"><time>' +
                    date(t.data) +
                    '</time><h3>' +
                    esc(t.descricao) +
                    '</h3></article>'
            ).join("") +
            '</div></section><section class="panel"><h2>Votações relacionadas</h2><div class="stack">' +
            (
                votes.length ? votes.map(
                    (v) => voteCard(v, 0)
                ).join("") :
                state(
                    "Ainda sem votação relacionada",
                    "Nenhuma votação foi localizada."
                )
            ) +
            '</div></section></div><aside class="aside"><section class="panel"><h2>Situação atual</h2><p>' +
            tag(x.descricaoSituacao) +
            '</p><dl><dt>Apresentação</dt><dd>' +
            date(x.dataApresentacao) +
            '</dd><dt>Regime</dt><dd>' +
            esc(x.regime) +
            '</dd><dt>Órgão atual</dt><dd>' +
            esc(x.orgaoAtual) +
            '</dd></dl></section><section class="panel"><h2>Autoria</h2><ul>' +
            authors.map(
                (a) =>
                    '<li><a href="perfil?id=' +
                    a.id +
                    '">' +
                    esc(a.nomeEleitoral) +
                    '</a> · ' +
                    esc(a.siglaPartido + "-" + a.siglaUf) +
                    '</li>'
            ).join("") +
            '</ul></section><section class="panel"><h2>Temas</h2><div class="tags">' +
            x.temas.map(tag).join("") +
            '</div></section><a class="button secondary" target="_blank" rel="noreferrer" href="https://dadosabertos.camara.leg.br/swagger/api.html">Consultar fonte oficial</a></aside></div></div>';

        bindCompare();
    }

    const voteClass = (v) => norm(v) === "sim" ? "sim" : norm(v) === "nao" ? "nao" : norm(v) === "abstencao" ? "abstencao" : "outro";
    function renderVotacao() {
        const x = voting(qs.get("id") || "VOT-301");
        if (!x) {
            app.innerHTML = '<div class="container page">' + 
                state(
                    "Votação não encontrada",
                    "O registro solicitado não existe.", 
                    '<a class="button" href="representantes">Voltar</a>'
                ) + 
                '</div>';
                return;
            } 
        const p = prop(x.proposicaoId);
        app.innerHTML = '<div class="container page">' + 
            crumbs(
                [
                    { label: "Início", url: "/" },
                    { label: "Proposição", url: "proposicao?id=" + p.id },
                    { label: "Votação " + x.id }
                ]
            ) + 
            '<p class="eyebrow">Registro de votação</p><h1 style="font-size:clamp(2.1rem,4vw,3.6rem)">' + 
            esc(x.proposicaoObjeto) + 
            '</h1><p class="lead">' + 
            esc(x.descricao) + 
            '</p>' + 
            origin() + 
            '<div class="vote-summary" style="margin-top:1.5rem"><section class="panel"><h2>Resultado</h2><p>' + 
            tag(x.resultado) + 
            '</p><p><strong>Data:</strong> ' + 
            dateTime(x.dataHoraRegistro) + 
            '<br><strong>Órgão:</strong> ' + 
            esc(x.siglaOrgao) + 
            '</p><a href="proposicao?id=' + 
            p.id + 
            '">Ver proposição relacionada →</a></section><section class="panel"><h2>Placar disponível</h2><div class="placar"><div><strong>' + 
            x.placar.sim + 
            '</strong>Sim</div><div><strong>' + 
            x.placar.nao + 
            '</strong>Não</div><div><strong>' + 
            x.placar.abstencao + 
            '</strong>Abstenção</div><div><strong>' + 
            x.placar.outros + 
            '</strong>Outros</div></div></section></div><section class="panel" style="margin-top:1.2rem"><h2>Votos nominais demonstrativos</h2><div class="inline-filter"><div class="field"><label for="vote-q">Representante</label><input id="vote-q" placeholder="Buscar por nome"></div><div class="field"><label for="vote-party">Partido</label><select id="vote-party"><option value="">Todos</option></select></div><div class="field"><label for="vote-type">Tipo de voto</label><select id="vote-type"><option value="">Todos</option></select></div></div><div class="table-wrap"><table class="vote-table"><caption class="sr-only">Votos nominais</caption><thead><tr><th>Representante</th><th>Partido/UF</th><th>Voto</th></tr></thead><tbody id="vote-rows"></tbody></table></div><div id="vote-empty"></div></section><div class="caution" style="margin-top:1rem">A disponibilidade de votos depende do tipo de votação. Um único voto não resume o posicionamento geral do representante.</div></div>';

        const rows = x.votos.map(
            (v) => ({ ...v, deputado: dep(v.deputadoId) })
        ).filter(
            (v) => v.deputado
        ); 

        const party = document.getElementById("vote-party");
        const type = document.getElementById("vote-type");

        [...new Set(rows.map((r) => r.deputado.siglaPartido))].sort().forEach(
            (v) => party.insertAdjacentHTML(
                "beforeend",
                '<option>' + 
                 esc(v) + 
                '</option>'
            )
        );
        
        [...new Set(rows.map((r) => r.tipoVoto))].sort().forEach(
            (v) => type.insertAdjacentHTML(
                "beforeend",
                '<option>' + 
                esc(v) + 
                '</option>'
            )
        );
        const update = () => { const q = norm(document.getElementById("vote-q").value);
        const filtered = rows.filter((r) => (!q || norm(r.deputado.nomeEleitoral).includes(q)) && (!party.value || r.deputado.siglaPartido === party.value) && (!type.value || r.tipoVoto === type.value));
        
        document.getElementById("vote-rows").innerHTML = filtered.map((r) => '<tr><td><a href="perfil?id=' + r.deputado.id + '">' + esc(r.deputado.nomeEleitoral) + '</a></td><td>' + esc(r.deputado.siglaPartido + "/" + r.deputado.siglaUf) + '</td><td><span class="vote-label ' + voteClass(r.tipoVoto) + '">' + esc(r.tipoVoto) + '</span></td></tr>').join(""); document.getElementById("vote-empty").innerHTML = filtered.length ? "" : state("Nenhum voto encontrado", "Altere os filtros."); }; 
        
        document.querySelectorAll("#vote-q,#vote-party,#vote-type").forEach((el) => el.addEventListener("input", update));
        
        update();
        bindCompare();
    }

    const stats = (x) => ({ proposicoes: D.proposicoes.dados.filter((p) => p.autorIds.includes(x.id)).length, votacoes: D.votacoes.dados.filter((v) => v.votos.some((r) => r.deputadoId === x.id)).length, eventos: D.eventos.dados.filter((e) => e.deputadoIds.includes(x.id)).length, orgaos: D.orgaos.dados.filter((o) => o.membros.some((m) => m.deputadoId === x.id)).length });
    function comparison(people) { const s = people.map(stats); const row = (label, a, b) => '<div class="compare-cell compare-key">' + esc(label) + '</div><div class="compare-cell">' + a + '</div><div class="compare-cell">' + b + '</div>'; return '<div class="compare-grid" role="table"><div class="compare-cell compare-key"></div>' + people.map((x) => '<div class="compare-cell compare-person"><div class="avatar">' + initials(x.nomeEleitoral) + '</div><strong>' + esc(x.nomeEleitoral) + '</strong><p class="muted">' + esc(x.siglaPartido + " · " + x.siglaUf) + '</p><a href="perfil?id=' + x.id + '">Abrir perfil</a></div>').join("") + row("Legislatura", people[0].idLegislatura + "ª", people[1].idLegislatura + "ª") + row("Situação", esc(people[0].situacao), esc(people[1].situacao)) + row("Proposições no recorte", s[0].proposicoes, s[1].proposicoes) + row("Votações localizadas", s[0].votacoes, s[1].votacoes) + row("Eventos com participação", s[0].eventos, s[1].eventos) + row("Órgãos e comissões", s[0].orgaos, s[1].orgaos) + row("Período", "2025–2026", "2025–2026") + row("Origem", "Estrutura da API", "Estrutura da API") + '</div>'; }
    function renderComparacao() {
        const fromUrl = (qs.get("ids") || "").split(",").map(Number).filter(Boolean).slice(0, 2); if (fromUrl.length) saveCompare(fromUrl); let ids = compareIds(); if (!ids.length) ids = [101, 102]; const people = ids.map(dep).filter(Boolean); const opts = D.deputados.dados.map((x) => '<option value="' + x.id + '">' + esc(x.nomeEleitoral + " · " + x.siglaPartido + "-" + x.siglaUf) + '</option>').join("");
        app.innerHTML = '<div class="container page">' + crumbs([{ label: "Início", url: "/" }, { label: "Comparação" }]) + '<p class="eyebrow">Leitura articulada</p><h1 style="font-size:clamp(2.2rem,4vw,3.6rem)">Comparar representantes</h1><p class="lead">Observe dimensões da atuação no mesmo recorte, sem notas ou ranking.</p><form class="picker" id="picker"><div class="field"><label for="compare-a">Representante 1</label><select id="compare-a">' + opts + '</select></div><div class="field"><label for="compare-b">Representante 2</label><select id="compare-b">' + opts + '</select></div><button class="button">Atualizar</button></form><div id="comparison">' + (people.length === 2 ? comparison(people) : state("Selecione mais um representante", "A comparação precisa de dois perfis.", '<a class="button" href="representantes">Escolher</a>')) + '</div><div class="caution" style="margin-top:1rem"><strong>Leitura responsável:</strong> diferenças numéricas não significam, isoladamente, melhor ou pior desempenho político.</div>' + origin() + '</div>';
        const a = document.getElementById("compare-a"), b = document.getElementById("compare-b"); a.value = people[0]?.id || 101; b.value = people[1]?.id || 102; document.getElementById("picker").addEventListener("submit", (e) => { e.preventDefault(); if (a.value === b.value) return toast("Escolha dois representantes diferentes."); saveCompare([Number(a.value), Number(b.value)]); location.href = "comparacao?ids=" + a.value + "," + b.value; }); bindCompare();
    }

    function renderGlossario() {
        const categories = ["Todos", ...new Set(D.glossario.map((g) => g.categoria))]; app.innerHTML = '<div class="container page">' + crumbs([{ label: "Início", url: "/" }, { label: "Glossário" }]) + '<p class="eyebrow">Apoio à interpretação</p><h1 style="font-size:clamp(2.2rem,4vw,3.6rem)">Glossário legislativo</h1><p class="lead">Definições breves para cidadãos não especialistas.</p><div class="filters"><div class="field"><label for="gloss-q">Pesquisar termo</label><input id="gloss-q" placeholder="Ex.: tramitação"></div></div><div class="glossary"><nav class="gloss-nav" aria-label="Categorias"><strong>Categorias</strong><div style="margin-top:.7rem">' + categories.map((c, i) => '<button class="' + (i ? "" : "active") + '" data-category="' + esc(c) + '">' + esc(c) + '</button>').join("") + '</div></nav><div><p class="results-meta" id="gloss-meta" aria-live="polite"></p><div class="accordion" id="gloss-list"></div></div></div></div>'; let category = "Todos";
        const update = () => { const q = norm(document.getElementById("gloss-q").value); const rows = D.glossario.filter((g) => (category === "Todos" || g.categoria === category) && (!q || norm(g.termo + " " + g.definicao).includes(q))); document.getElementById("gloss-meta").textContent = rows.length + (rows.length === 1 ? " termo encontrado" : " termos encontrados"); document.getElementById("gloss-list").innerHTML = rows.length ? rows.map((g, i) => '<article class="accordion-item"><h2 style="margin:0"><button class="accordion-button" aria-expanded="false" aria-controls="def-' + i + '">' + esc(g.termo) + '</button></h2><div class="accordion-panel" id="def-' + i + '" hidden><p>' + esc(g.definicao) + '</p>' + tag(g.categoria) + '</div></article>').join("") : state("Nenhum termo encontrado", "Tente uma palavra ou categoria diferente."); document.querySelectorAll(".accordion-button").forEach((b) => b.addEventListener("click", () => { const open = b.getAttribute("aria-expanded") === "true"; b.setAttribute("aria-expanded", !open); document.getElementById(b.getAttribute("aria-controls")).hidden = open; })); }; document.getElementById("gloss-q").addEventListener("input", update); document.querySelectorAll("[data-category]").forEach((b) => b.addEventListener("click", () => { category = b.dataset.category; document.querySelectorAll("[data-category]").forEach((x) => x.classList.toggle("active", x === b)); update(); })); update(); bindCompare();
    }
    function notFound() { app.innerHTML = '<div class="container page">' + state("Página não encontrada", "O endereço não corresponde a uma área do protótipo.", '<a class="button" href="/">Voltar ao início</a>') + '</div>'; bindCompare(); }

    const menu = document.getElementById("menu"); const mobile = document.getElementById("mobile"); menu.addEventListener("click", () => { const open = menu.getAttribute("aria-expanded") === "true"; menu.setAttribute("aria-expanded", !open); mobile.hidden = open; document.body.classList.toggle("menu-open", !open); });
    document.querySelectorAll("[data-search]").forEach((f) => f.addEventListener("submit", (e) => { e.preventDefault(); location.href = "representantes?q=" + encodeURIComponent(new FormData(f).get("q")); }));
    ({ home: renderHome, representantes: renderRepresentantes, perfil: renderPerfil, proposicao: renderProposicao, votacao: renderVotacao, comparacao: renderComparacao, glossario: renderGlossario, notfound: notFound }[page] || notFound)();
})();
