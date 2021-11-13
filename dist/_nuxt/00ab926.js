;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    958(t, o, r) {
      'use strict'
      r.r(o)
      const e = {
        components: { TopNavigation: r(249).default },
        data() {
          return {}
        },
        created() {},
      }
      const n = r(5)
      const c = r(4)
      const l = r.n(c)
      const v = r(189)
      const d = r(938)
      const component = Object(n.a)(
        e,
        function () {
          const t = this
          const o = t.$createElement
          const e = t._self._c || o
          return e(
            'div',
            [
              e('TopNavigation', {
                attrs: {
                  links: [['Guias', '/guias']],
                  active: 'Guia básico de cultivo',
                  description:
                    'Aprenda a plantar, colher e cuidar da sua horta ou jardim com esse guia simples e prático',
                  img: 'https://cultivarbrasil.com' + r(363),
                },
              }),
              t._v(' '),
              e(
                'v-container',
                { staticClass: 'guide', attrs: { fluid: '' } },
                [
                  e(
                    'div',
                    { staticClass: 'img-wrapper' },
                    [e('CachedImage', { attrs: { raw: '', src: r(363) } })],
                    1
                  ),
                  t._v(' '),
                  e('br'),
                  t._v(' '),
                  e('p', { staticClass: 'text-center' }, [
                    t._v(
                      '\n      Pra cultivar plantas e alimentos saudáveis é preciso oferecer atenção,\n      cuidado e dedicação, mas os benefícios que essa prática trará pra sua\n      saúde física, mental, emocional e psicológica são muitos.\n    '
                    ),
                  ]),
                  t._v(' '),
                  e('p', { staticClass: 'text-center' }, [
                    t._v(
                      '\n      A seguir você encontra informações importantes pra saber como começar!\n    '
                    ),
                  ]),
                  t._v(' '),
                  e(
                    'v-btn',
                    {
                      attrs: {
                        large: '',
                        block: '',
                        color: 'primary',
                        to: '/guias/guia-de-cultivo/planejamento-da-horta',
                      },
                    },
                    [t._v('\n      Planejamento da Horta\n    ')]
                  ),
                  t._v(' '),
                  e('br'),
                  t._v(' '),
                  e(
                    'v-btn',
                    {
                      attrs: {
                        large: '',
                        block: '',
                        color: 'primary',
                        to: '/guias/guia-de-cultivo/quando-plantar',
                      },
                    },
                    [t._v('\n      Quando plantar\n    ')]
                  ),
                  t._v(' '),
                  e('br'),
                  t._v(' '),
                  e(
                    'v-btn',
                    {
                      attrs: {
                        large: '',
                        block: '',
                        color: 'primary',
                        to: '/guias/guia-de-cultivo/como-plantar',
                      },
                    },
                    [t._v('\n      Como plantar\n    ')]
                  ),
                  t._v(' '),
                  e('br'),
                  t._v(' '),
                  e(
                    'v-btn',
                    {
                      attrs: {
                        large: '',
                        block: '',
                        color: 'primary',
                        to: '/guias/guia-de-cultivo/cuidados-com-a-horta',
                      },
                    },
                    [t._v('\n      Cuidados com a Horta\n    ')]
                  ),
                  t._v(' '),
                  e('br'),
                  t._v(' '),
                  e(
                    'v-btn',
                    {
                      attrs: {
                        large: '',
                        block: '',
                        color: 'primary',
                        to: '/guias/guia-de-cultivo/dicas-basicas',
                      },
                    },
                    [t._v('\n      Dicas básicas\n    ')]
                  ),
                  t._v(' '),
                  e('br'),
                  t._v(' '),
                  e('Comments', {
                    attrs: { target: '/guias/guia-de-cultivo' },
                  }),
                ],
                1
              ),
            ],
            1
          )
        },
        [],
        !1,
        null,
        null,
        null
      )
      o.default = component.exports
      l()(component, {
        TopNavigation: r(249).default,
        CachedImage: r(91).default,
        Comments: r(250).default,
      }),
        l()(component, { VBtn: v.a, VContainer: d.a })
    },
  },
])
