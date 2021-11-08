(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{789:function(e){e.exports=JSON.parse('[{"number":1,"code":"jan","name":"Janeiro","description":"Esse é o mês mais quente do ano. Basta lembrar que é exatamente nessa época onde as pessoas começam de fato a aproveitar o verão. Se você vai começar a cultivar uma planta, evite aquelas que preferem climas mais frios porque elas não irão resistir. É melhor cultivar as plantas mais resistentes ao calor."},{"number":2,"code":"fev","name":"Fevereiro","description":"Esse mês o verão ainda está em alta e por esse motivo as plantas mais resistentes à temperaturas elevadas ganham destaque. Além das que citamos mais acima, você também pode cultivar chicória, feijão, crisântemos, rabanetes, beterraba, ervilhas,  entre outras."},{"number":3,"code":"mar","name":"Março","description":"No mês de março a temperatura começa a ficar mais amena com a chegada do outono. Esse mês chove em algumas localidades e por esse motivo, você pode alternar entre plantas que se adaptam bem em climas mais quentes, mas que não tenham restrições com chuvas mais constantes. Alguns exemplos de plantas que podem ser cultivadas nesse período é a cebola, repolho, trevo de quatro folhas, amarílis, amores-perfeitos, cravos, papoulas, coentros, agrião, favas, aipo, nabos, alho, morangos entre outras."},{"number":4,"code":"abr","name":"Abril","description":"Abril é começo do outono então você já pode abusar das espécies que gostam daquele cultivo feito à meia sombra. Alguns exemplos de plantas para esse mês é basicamente as mesmas frutas de março como morangos, beterraba, espargos, alface, couves das diversas variações, lentilhas, espinafres, favas e nabos."},{"number":5,"code":"mai","name":"Maio","description":"Maio é quando o ano começa a se preparar para as chuvas e nesse mês você pode cultivar plantas como o alho, aveia, batata, centeio, cevada, trigo, entre outras."},{"number":6,"code":"jun","name":"Junho","description":"Para o mês de junho, plantas como as macieiras e as pereiras caem muito bem, pois são plantas que resistem à chuvas e também ao sol forte. Dependendo do local onde essas plantas forem cultivadas, pode ocorrer um desses dois climas então é sempre bom ter uma planta mais resistente."},{"number":7,"code":"jul","name":"Julho","description":"Julho é praticamente o mês que começa o inverno e nesse caso já indicamos plantas que gostam de chuvas ou tem uma boa resistência a elas como é o caso da alface, ervilha, rabanetes, fava, repolho, entre outros."},{"number":8,"code":"ago","name":"Agosto","description":"Se você mora no sul do país, esse mês é bem chuvoso por essa região. Essa grande quantidade de chuva acaba se espalhando por boa parte do Brasil então para garantir é indicado sempre ter plantinhas que gostam de climas mais amenos. Nesse caso você poderá plantar alcachofras, melão, aipo, cebola, pimentão, morango, melancia, tomate, entre outros."},{"number":9,"code":"set","name":"Setembro","description":"É o mês mais frio do ano e será quando você vai aproveitar para plantar espécies como a beterraba, alface, melancia, couves, espinafres, cenoura, entre outros."},{"number":10,"code":"out","name":"Outubro","description":"Com a chegada das chuvas na primavera a umidade aumenta e a temperatura abaixa. Nesse mês o mais indicado é o cultivo de espécies que se adaptam bem em climas mais frios."},{"number":11,"code":"nov","name":"Novembro","description":"Em novembro a temperatura começa a subir e se preparar para a chegada do verão. Nesse mês plantas como beterraba, melão, feijão, pimentões, brócolis, agrião, pepino, entre outras devem ser cultivadas."},{"number":12,"code":"dez","name":"Dezembro","description":"Nesse mês o  sol do verão já começa a dar os ar das graças então preferivelmente cultive plantas como a cenoura, pepino, roseiras, lírios, feijão, brócolis, abóbora, repolho, beterraba, entre outras."}]')},802:function(e,o,r){"use strict";r.r(o);r(9),r(70),r(32),r(62);var n=r(789),t={computed:{species:function(){var e=this;return this.$store.state.species.filter((function(o){if(o.planting_time){if(!e.currentRegion)return!0;if("ano todo"===o.planting_time[e.currentRegion])return!0;if("*"===o.planting_time[e.currentRegion])return!1;var r=o.planting_time[e.currentRegion].split("-"),t=n.find((function(e){return e.code===r[0]})).number,m=n.find((function(e){return e.code===r[1]})).number;if(t<=m){if(e.currentMonth.number>=t&&e.currentMonth.number<=m)return!0}else if(e.currentMonth.number>=t&&e.currentMonth.number<=12&&e.currentMonth.number>=1&&e.currentMonth.number<=m)return!0;return!1}return!1}))},currentMonth:function(){var e=(new Date).getMonth()+1;return n.find((function(o){return o.number===e}))}}},m=r(6),c=r(5),d=r.n(c),l=r(780),component=Object(m.a)(t,(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",[r("TopNavigation",{attrs:{links:[["Ferramentas","/ferramentas"]],active:"O que plantar em "+e.currentMonth.name.toLowerCase(),description:e.currentMonth.description}}),e._v(" "),r("v-container",[r("div",{staticClass:"text-center"},[r("h3",{staticClass:"text-center mb-3"},[e._v(e._s(e.currentMonth.name))]),e._v(" "),r("p",[e._v(e._s(e.currentMonth.description))]),e._v(" "),r("p",[e._v("\n        Confira abaixo algumas sugestões para este mês no\n        "),r("strong",[e._v(e._s(e.currentRegion||"Brasil"))]),e._v(":\n      ")])])]),e._v(" "),r("Species",{attrs:{species:e.species,parent:"/ferramentas/o-que-plantar-esse-mes"}})],1)}),[],!1,null,null,null);o.default=component.exports;d()(component,{TopNavigation:r(223).default,Species:r(327).default}),d()(component,{VContainer:l.a})}}]);