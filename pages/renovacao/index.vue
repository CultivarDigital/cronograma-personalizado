<template>
  <div>
    <TopNavigation active="Meu cronograma" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Renovação" />
      </div>
      <div class="text-center">
        <img
          class="mb-3"
          src="~/assets/img/renovacao.png"
          alt="Renove seu plano"
          style="max-width: 100%"
        />
        <h3 class="text-h5 font-weight-bold mb-3" style="color: #acacac">
          Vamos seguir juntas?
        </h3>
        <p style="color: #78746d">
          <small>
            Chegou o momento da sua renovação, para continuar dentro do nosso
            CCP com todas as vantagens de acesso e valor de desconto, faça a sua
            renovação clicando no botão abaixo.
          </small>
        </p>
        <p class="mb-8" style="color: #78746d">
          <small>
            (Ao clicar, será redirecionada para a página de pagamento e após
            confirmado, será liberado o formulário aqui nesta aba)
          </small>
        </p>
        <v-btn
          to="/renovacao/renovar"
          x-large
          dark
          color="rgba(123, 163, 162, 0.6)"
        >
          RENOVAR O CRONOGRAMA
        </v-btn>
      </div>
    </v-container>
  </div>
</template>
