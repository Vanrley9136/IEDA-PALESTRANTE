'use strict';



const dadosSite = {
    marca: 'IEDA PALESTRANTE',



    navegacao: [
        {
            label: 'Início',
            href: '#inicio'
        },
        {
            label: 'Sobre',
            href: '#sobre'
        },
        {
            label: 'Trajetória',
            href: '#trajetoria'
        },
        {
            label: 'Livro',
            href: '#livro'
        },
        {
            label: 'FAQ',
            href: '#faq'
        },
        {
            label: 'Contato',
            href: '#contato'
        }
    ],



    hero: {
        eyebrow: 'Apresentação',
        title: 'Parece que me casei com meu pai',
        description: 'Uma jornada de autoconhecimento que revela como experiências do passado influenciam seus relacionamentos hoje. Entenda seus padrões emocionais e comece a transformar sua história com mais consciência.',
        primaryButtonLabel: 'Quero conhecer o livro',
        primaryButtonHref: '#livro',
        secondaryButtonLabel: 'Sobre mim',
        secondaryButtonHref: '#sobre',
        image: 'img/iedaa.png',
        imageAlt: 'Parece que me casei com meu pai'
    },



    sobre: {
        label: 'Sobre mim',

        title: 'Quem Sou',

        description: `
            <p>
                Sou psicanalista especializada em diversas abordagens terapêuticas inovadoras,
                que combinam o conhecimento da medicina tradicional com as mais recentes
                descobertas da medicina quântica.
            </p>

            <p>
                Minha jornada profissional é marcada pela busca contínua de um entendimento
                mais profundo da mente e do corpo.
            </p>

            <p>
                Ao longo dos anos, dediquei-me intensamente ao estudo da física quântica
                com mestres renomados, primeiramente com o Professor Helio Couto,
                mergulhando nas fronteiras da ciência que explora as interações
                fundamentais da matéria e da energia.
            </p>

            <p>
                Também explorei a aplicação prática desses conceitos na área da saúde
                e do bem-estar, participando de congressos com grandes referências,
                como Deepak Chopra, Valentina Onisor e Amit Goswami.
            </p>

            <p>
                Especializei-me em EFT ( Emotional Freedom Technique ),
                técnica que libera crenças e memórias negativas,
                Matrix Reimprinting com Sunita Bhogal,
                Medicina Germânica e Reiki.
            </p>

            <p>
                Minha formação em Psicanálise pelo Instituto Brasileiro de Ciências
                e Psicanálise ( IBCP ) complementa essa abordagem holística,
                permitindo uma compreensão mais profunda das conexões entre mente,
                emoções e saúde física.
            </p>
        `,

        image: 'https://horizonstudiosbr.com/wp-content/uploads/2025/09/Captura-de-tela-2025-09-04-140129-1.png',

        imageAlt: 'Retrato da autora',

        features: [
       
        ]
    },



    trajetoria: {
        label: 'Trajetória profissional',

        title: 'Minha caminhada até aqui',

        items: [
            {
                year: '1998 a 2013',
                title: 'Representante Comercial em Artes Gráficas',
                description: 'Nesse período, percebi que meus clientes confiavam em mim a ponto de compartilharem seus problemas pessoais, e eu conseguia transmitir a eles a segurança e a confiança de que precisavam.'
            },
            {
                year: '2013',
                title: 'Estudante de Psicanálise e Física Quântica',
                description: 'Decidi encerrar meu ciclo como Representante Comercial e, em um gesto de coragem e entrega, vendi meu carro para investir no meu grande propósito: a formação em Psicanálise.'
            },
            {
                year: '2018',
                title: 'Abertura do meu primeiro consultório',
                description: 'Dei início aos meus atendimentos, unindo diferentes abordagens de cuidado e autoconhecimento: atuei como Psicanalista, Terapeuta Quântica e também como Practitioner em EFT ( Emotional Freedom Techniques ), ampliando as possibilidades de transformação para cada pessoa que me procurava.'
            },
            {
                year: '2025',
                title: 'Início da Jornada como Palestrante',
                description: 'Motivada pelo desejo de agregar valor à vida das pessoas, iniciei minha jornada de aprendizado em cursos e palestras. A partir dessa experiência, decidi compartilhar minha própria trajetória como palestrante, levando o tema Saúde Mental e Emocional ao público.'
            }
        ]
    },



    livro: {
        label: 'O livro',

        title: 'Parece que me casei com meu pai',

        description: `
            <p>
                Neste livro, compartilho minha jornada de autoconhecimento
                e as descobertas que me ajudaram a quebrar padrões emocionais inconscientes.
            </p>

            <p>
                Através de uma abordagem profunda e transformadora,
                você será convidado a olhar para sua própria história,
                compreender suas relações e reconhecer padrões que podem estar
                influenciando sua vida de forma silenciosa.
            </p>

            <p>
                Você também pode transformar sua história.
            </p>
        `,

        image: 'livros/livro_01.png',

        imageAlt: 'Capa do livro',

        primaryButtonLabel: 'Comprar pelo WhatsApp',

        whatsappNumber: '5511982265798',

        whatsappMessage: 'Olá, quero comprar o livro "Parece que me casei com meu pai".'
    },



    faq: {
        label: 'Perguntas frequentes',

        title: 'Dúvidas sobre o livro',

        items: [
            {
                question: 'Como faço para comprar o livro?',
                answer: 'Você pode comprar diretamente pelo botão de WhatsApp na seção do livro.'
            },
            {
                question: 'O livro é físico ou digital?',
                answer: 'Atualmente, consulte a disponibilidade diretamente no contato informado na página.'
            },
            {
                question: 'Posso convidar para palestras e eventos?',
                answer: 'Sim. Use a seção de contato para enviar convite, informações do evento, data, cidade e público estimado.'
            },
            {
                question: 'O conteúdo do livro é baseado em experiências reais?',
                answer: 'O livro apresenta uma jornada profunda de autoconhecimento, reflexão emocional e transformação pessoal.'
            }
        ]
    },



    contato: {
        label: 'Contato',

        title: 'Quer levar a palestra para seu evento?',

        description: 'Convites para palestras, entrevistas e keynotes. Envie sua mensagem com data, cidade e público estimado.',

        whatsappNumber: '5511982265798',

        whatsappMessage: 'Olá, gostaria de informações sobre palestra.',

        email: 'iedagoncalves264@gmail.com'
    },



    rodape: {
        copyright: '© 2026 • Todos os direitos reservados.',

        desenvolvedor: {
            label: 'Desenvolvido por',
            name: 'vn.code',
            url: 'https://links-vn.vercel.app/'
        },

        social: [
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/iedamariapalestrante?utm_source=qr&igsh=MTFtam4zZjZwNXJwaw%3D%3D'
            },
            {
                name: 'Facebook',
                url: '#'
            },
            {
                name: 'LinkedIn',
                url: '#'
            }
        ]
    }
};





const elementoMarca = document.getElementById( 'brand' );
const elementoNavegacao = document.getElementById( 'primaryNav' );
const elementoHero = document.getElementById( 'heroSection' );
const elementoSobre = document.getElementById( 'aboutSection' );
const elementoTrajetoria = document.getElementById( 'journeySection' );
const elementoLivro = document.getElementById( 'bookSection' );
const elementoFaq = document.getElementById( 'faqSection' );
const elementoContato = document.getElementById( 'ctaSection' );
const elementoRodape = document.getElementById( 'footerSection' );
const botaoMenu = document.getElementById( 'menuToggle' );
const elementoLoader = document.getElementById( 'siteLoader' );





function obterIconeRedeSocial ( nomeRede ) {

    if ( nomeRede === 'Instagram' ) {
        return `
            <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm6.5-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"
                    fill="currentColor"
                />
            </svg>
        `;
    }



    if ( nomeRede === 'Facebook' ) {
        return `
            <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13 22v-9h3l1-4h-4V7c0-1 0-2 2-2h2V1h-3c-3 0-5 2-5 5v3H6v4h3v9z"
                    fill="currentColor"
                />
            </svg>
        `;
    }



    if ( nomeRede === 'LinkedIn' ) {
        return `
            <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4zm0 5h4v13H4V8zm7 0h4v2h.1c.6-1 2-2 4-2c4 0 5 2.6 5 6v7h-4v-6c0-1.5 0-3-2-3s-2.3 1.5-2.3 3v6H11V8z"
                    fill="currentColor"
                />
            </svg>
        `;
    }



    return '';
}





function renderizarMarca ( ) {

    if ( ! elementoMarca ) {
        return;
    }



    elementoMarca.innerHTML = `
        <span>${ dadosSite.marca }</span>
    `;
}





function renderizarNavegacao ( ) {

    if ( ! elementoNavegacao ) {
        return;
    }



    elementoNavegacao.innerHTML = `
        ${ dadosSite.navegacao.map(
            ( item ) => `
                <a href="${ item.href }">${ item.label }</a>
            `
        ).join( '' ) }
    `;
}





function renderizarHero ( ) {

    if ( ! elementoHero ) {
        return;
    }



    elementoHero.innerHTML = `
        <article class="hero-copy">
            <span class="eyebrow">${ dadosSite.hero.eyebrow }</span>

            <h1 id="heroTitle">
                ${ dadosSite.hero.title }
            </h1>

            <p>
                ${ dadosSite.hero.description }
            </p>

            <div class="hero-actions">
                <a
                    href="${ dadosSite.hero.primaryButtonHref }"
                    class="button-primary"
                >
                    ${ dadosSite.hero.primaryButtonLabel }
                </a>

                <a
                    href="${ dadosSite.hero.secondaryButtonHref }"
                    class="button-secondary"
                >
                    ${ dadosSite.hero.secondaryButtonLabel }
                </a>
            </div>
        </article>

        <aside class="hero-media">
            <div class="hero-card">
                <img
                    src="${ dadosSite.hero.image }"
                    alt="${ dadosSite.hero.imageAlt }"
                >
            </div>
        </aside>
    `;
}





function renderizarSobre ( ) {

    if ( ! elementoSobre ) {
        return;
    }



    elementoSobre.innerHTML = `
        <article class="about-grid reveal">
        <figure class="about-media">

            <div class="about-gallery">

                ${ [
                    'img/IEDA.png',
                    'img/ieda2.png',
                    'img/ieda3.png',
                    'img/ieda4.png'
                ].map(
                    function ( imagem ) {

                        return `
                            <div class="about-gallery-item">
                                <img src="${ imagem }">
                            </div>
                        `;

                    }
                ).join( '' ) }

            </div>

        </figure>

            <div class="about-content">
                <header class="section-heading">
                    <span>${ dadosSite.sobre.label }</span>
                    <h2 id="aboutTitle">${ dadosSite.sobre.title }</h2>
                </header>

                ${ dadosSite.sobre.description }

                <ul class="feature-list">
                    ${ dadosSite.sobre.features.map(
                        ( item ) => `
                            <li>
                                <span class="icon-check">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M20 6L9 17L4 12"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>

                                <span>
                                    ${ item }
                                </span>
                            </li>
                        `
                    ).join( '' ) }
                </ul>
            </div>
        </article>
    `;
}





function renderizarTrajetoria ( ) {

    if ( ! elementoTrajetoria ) {
        return;
    }



    elementoTrajetoria.innerHTML = `
        <article class="journey-wrap reveal">

            <header class="section-heading">
                <span>${ dadosSite.trajetoria.label }</span>
                <h2 id="journeyTitle">${ dadosSite.trajetoria.title }</h2>
            </header>

            <div class="journey-timeline">
                ${ dadosSite.trajetoria.items.map(
                    ( item ) => `
                        <article class="journey-item">

                            <span class="journey-dot"></span>

                            <div class="journey-card">
                                <h3>
                                    ${ item.year } - ${ item.title }
                                </h3>

                                <p>
                                    ${ item.description }
                                </p>
                            </div>

                        </article>
                    `
                ).join( '' ) }
            </div>

        </article>
    `;
}





function renderizarLivro ( ) {

    if ( ! elementoLivro ) {
        return;
    }



    elementoLivro.innerHTML = `
        <article class="book-grid reveal">
            <figure class="book-media">
                <img
                    src="${ dadosSite.livro.image }"
                    alt="${ dadosSite.livro.imageAlt }"
                >
            </figure>

            <div class="book-content">
                <header class="section-heading">
                    <span>${ dadosSite.livro.label }</span>
                    <h2 id="bookTitle">${ dadosSite.livro.title }</h2>
                </header>

                ${ dadosSite.livro.description }



                <p class="book-highlight">
                    Você sente que repete padrões nos seus relacionamentos e não entende o porquê?
                </p>



                <ul class="feature-list">

                    <li>

                        <span class="icon-check">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M20 6L9 17L4 12"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>

                        <span>
                            Entenda padrões emocionais inconscientes
                        </span>

                    </li>



                    <li>

                        <span class="icon-check">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M20 6L9 17L4 12"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>

                        <span>
                            Rompa ciclos repetitivos nos relacionamentos
                        </span>

                    </li>



                    <li>

                        <span class="icon-check">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M20 6L9 17L4 12"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>

                        <span>
                            Desenvolva consciência emocional
                        </span>

                    </li>

                </ul>



                <p class="book-proof">
                    Já ajudou diversas pessoas a compreenderem suas emoções.
                </p>



                <p class="book-urgency">
                    🔥 Atendimento direto via WhatsApp
                </p>



                <div class="hero-actions">
                    <a
                        href="https://wa.me/${ dadosSite.livro.whatsappNumber }?text=${ encodeURIComponent( dadosSite.livro.whatsappMessage ) }"
                        class="button-primary button-whatsapp"
                        target="_blank"
                    >
                        <span class="icon-whatsapp">
                            <svg
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.821 14.121c-.241.682-1.199 1.246-1.963 1.411-.523.111-1.205.199-3.503-.753-2.581-1.069-6.165-4.878-6.165-7.413 0-1.29.744-2.793 2.045-2.793.626 0 .764.012.97.506.241.582.829 2.016.899 2.163.289.603-.294.956-.717 1.481-.135.158-.288.329-.117.623.17.288.758 1.246 1.622 2.015 1.116.994 2.021 1.311 2.345 1.446.241.1.529.077.705-.111.223-.241.5-.641.782-1.035.199-.282.452-.317.717-.217.179.062 2.454 1.118 2.55 1.287.071.123.071.705-.17 1.387zM10 0C4.486 0 0 4.486 0 10c0 2.187.705 4.215 1.904 5.861L.658 19.577l3.843-1.228C6.082 19.395 7.969 20 10 20c5.514 0 10-4.486 10-10S15.514 0 10 0z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>

                        <span>
                            ${ dadosSite.livro.primaryButtonLabel }
                        </span>
                    </a>
                </div>
            </div>
        </article>
    `;
}





function renderizarFaq ( ) {

    if ( ! elementoFaq ) {
        return;
    }



    elementoFaq.innerHTML = `
        <article class="faq-wrap reveal">

            <header class="section-heading">
                <span>${ dadosSite.faq.label }</span>
                <h2 id="faqTitle">${ dadosSite.faq.title }</h2>
            </header>

            <div class="faq-list">
                ${ dadosSite.faq.items.map(
                    ( item , indice ) => `
                        <details class="faq-item" ${ indice === 0 ? 'open' : '' }>

                            <summary class="faq-question">
                                <span>${ item.question }</span>
                                <span class="faq-icon">+</span>
                            </summary>

                            <div class="faq-answer">
                                <p>${ item.answer }</p>
                            </div>

                        </details>
                    `
                ).join( '' ) }
            </div>

        </article>
    `;
}





function renderizarContato ( ) {

    if ( ! elementoContato ) {
        return;
    }



    elementoContato.innerHTML = `
        <header class="section-heading">
            <span>${ dadosSite.contato.label }</span>
            <h2 id="ctaTitle">${ dadosSite.contato.title }</h2>
        </header>

        <p>
            ${ dadosSite.contato.description }
        </p>

        <div class="cta-actions">

            <a
                href="https://wa.me/${ dadosSite.contato.whatsappNumber }?text=${ encodeURIComponent( dadosSite.contato.whatsappMessage ) }"
                class="button-primary"
                target="_blank"
            >
                Falar no WhatsApp
            </a>

            <a
                href="mailto:${ dadosSite.contato.email }?subject=Convite%20para%20palestra"
                class="button-secondary"
            >
                Enviar e-mail
            </a>

        </div>
    `;
}





function renderizarRodape ( ) {

    if ( ! elementoRodape ) {
        return;
    }



    elementoRodape.innerHTML = `
        <div class="footer-left">
            <p>${ dadosSite.rodape.copyright }</p>

            <a
                href="${ dadosSite.rodape.desenvolvedor.url }"
                target="_blank"
                rel="noopener noreferrer"
                class="developer-link"
                aria-label="Desenvolvido por ${ dadosSite.rodape.desenvolvedor.name }"
            >
                <span class="developer-label">
                    ${ dadosSite.rodape.desenvolvedor.label }
                </span>

                <span class="developer-name">
                    ${ dadosSite.rodape.desenvolvedor.name }
                </span>
            </a>
        </div>

        <div class="footer-social">
            ${ dadosSite.rodape.social.map(
                ( item ) => `
                    <a
                        href="${ item.url }"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-link"
                        aria-label="${ item.name }"
                    >
                        ${ obterIconeRedeSocial( item.name ) }
                    </a>
                `
            ).join( '' ) }
        </div>
    `;
}





function iniciarLoader ( ) {

    if ( ! elementoLoader ) {
        return;
    }



    window.addEventListener(
        'load',
        function ( ) {

            setTimeout(
                function ( ) {
                    elementoLoader.classList.add( 'is-hidden' );
                },
                1500
            );

        }
    );
}





function iniciarMenuMobile ( ) {

    if ( ! botaoMenu || ! elementoNavegacao ) {
        return;
    }



    botaoMenu.addEventListener(
        'click',
        function ( ) {

            const menuAberto = elementoNavegacao.classList.toggle( 'is-open' );

            botaoMenu.classList.toggle( 'is-active', menuAberto );
            botaoMenu.setAttribute( 'aria-expanded', menuAberto ? 'true' : 'false' );
        }
    );
}





function iniciarAnimacaoRevelar ( ) {

    const elementosAnimados = document.querySelectorAll( '.reveal' );

    if ( ! elementosAnimados.length ) {
        return;
    }



    const observador = new IntersectionObserver(
        function ( entradas ) {

            entradas.forEach(
                function ( entrada ) {

                    if ( entrada.isIntersecting ) {
                        entrada.target.classList.add( 'is-visible' );
                    }

                }
            );

        },
        {
            threshold: 0.18
        }
    );



    elementosAnimados.forEach(
        function ( elemento ) {
            observador.observe( elemento );
        }
    );
}





function iniciarNavegacaoAtiva ( ) {

    const linksNavegacao = document.querySelectorAll( '.primary-nav a' );
    const secoes = document.querySelectorAll( 'section, main' );



    if ( ! linksNavegacao.length ) {
        return;
    }



    linksNavegacao.forEach(
        function ( link ) {

            link.addEventListener(
                'click',
                function ( ) {

                    linksNavegacao.forEach(
                        function ( item ) {
                            item.classList.remove( 'is-active' );
                        }
                    );

                    link.classList.add( 'is-active' );

                    if ( elementoNavegacao ) {
                        elementoNavegacao.classList.remove( 'is-open' );
                    }

                    if ( botaoMenu ) {
                        botaoMenu.classList.remove( 'is-active' );
                        botaoMenu.setAttribute( 'aria-expanded', 'false' );
                    }

                }
            );

        }
    );



    window.addEventListener(
        'scroll',
        function ( ) {

            let secaoAtual = '';

            if ( window.scrollY < 120 ) {
                secaoAtual = 'inicio';
            } else {

                secoes.forEach(
                    function ( secao ) {

                        const topoSecao = secao.offsetTop - 150;

                        if ( window.scrollY >= topoSecao ) {
                            secaoAtual = secao.getAttribute( 'id' );
                        }

                    }
                );

                if (
                    window.innerHeight + window.scrollY >= document.body.offsetHeight - 20
                ) {
                    secaoAtual = 'contato';
                }

            }

            linksNavegacao.forEach(
                function ( link ) {

                    link.classList.remove( 'is-active' );

                    if ( link.getAttribute( 'href' ) === '#' + secaoAtual ) {
                        link.classList.add( 'is-active' );
                    }

                }
            );

        }
    );
}





function iniciarAplicacao ( ) {

    renderizarMarca( );
    renderizarNavegacao( );
    renderizarHero( );
    renderizarSobre( );
    renderizarTrajetoria( );
    renderizarLivro( );
    renderizarFaq( );
    renderizarContato( );
    renderizarRodape( );

    iniciarLoader( );
    iniciarMenuMobile( );
    iniciarAnimacaoRevelar( );
    iniciarNavegacaoAtiva( );
}





iniciarAplicacao( );