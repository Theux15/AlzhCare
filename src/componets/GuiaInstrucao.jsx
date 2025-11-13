import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { ResponsiveHeader } from "./ResponsiveHeader.jsx";

export function GuiaInstrucao() {
  return (
    <div className="bg-[var(--color-chatcolor)] dark:bg-[var(--color-dark-purple-home)] min-h-screen">
      <ResponsiveHeader/>

      <div className="flex flex-col items-center justify-center mt-10 px-4 text-center [color:var(--color-dark-purple)] dark:[color:var(--color-white)]">
        <h1 className="font-bold mb-2 text-2xl md:text-6xl">
            <span className="block md:hidden">Guia</span>
            <span className="hidden md:block">Guia de Instruções</span>
        </h1>
        <p className="text-sm md:text-lg font-medium">
            Siga as instruções de utilização do AlzhCare
        </p>
    </div>

      <div className="flex justify-center mt-6 px-4">
        <div className="w-[300px] h-[180px] md:w-[600px] md:h-[350px] bg-gray-400 rounded-lg flex items-center justify-center shadow-md">
          <span className="text-3xl md:text-5xl">▶</span>
        </div>
      </div>

      <div className="max-w-sm md:max-w-4xl mx-auto mt-10 mb-20 px-6">
        <h2 className="text-xl font-bold text-center mb-6 md:text-4xl [color:var(--color-dark-purple)] dark:[color:var(--color-white)]">
          Guia de Utilização <br />
          <span className="text-sm md:text-2xl">Sistema de Monitoramento IoT AlzhCare</span>
        </h2>

        <div className="flex flex-col gap-6 text-sm leading-relaxed text-justify md:text-lg [color:var(--color-dark-purple)] dark:[color:var(--color-white)]">
          <div>
            <h3 className="font-bold">1. Preparação Inicial - Ligar a Pochete</h3>
            <p>
              Antes de usar o aplicativo, certifique-se que o dispositivo está operacional:
              Localize o botão de energia na pochete, pressione e mantenha por 2 segundos.
              O LED indicador deve acender (azul ou verde). Verifique se a bateria está carregada
              (LED não deve piscar vermelho).
            </p>
          </div>

          <div>
            <h3 className="font-bold">2. Configurar Hotspot do Celular</h3>
            <p>
              O dispositivo precisa de conexão com internet. Abra as Configurações do celular,
              acesse "Ponto de Acesso" ou "Hotspot Móvel" e ative-o. Mantenha o hotspot ligado
              durante o monitoramento. O dispositivo consome aproximadamente 50-100MB por dia.
              Configure o ESP32 previamente com as credenciais do seu hotspot.
            </p>
          </div>

          <div>
            <h3 className="font-bold">3. Verificar Conexão</h3>
            <p>
              Aguarde 30-60 segundos para a conexão estabelecer. O LED do ESP32 deve parar
              de piscar quando conectado. Abra o aplicativo web no navegador e verifique
              o status "🟢 Conectado" no topo da tela.
            </p>
          </div>

          <div>
            <h3 className="font-bold">4. Monitoramento de Sinais Vitais</h3>
            <p>
              O sistema monitora Frequência Cardíaca (normal: 60-100 bpm), Saturação de Oxigênio
              (normal: acima de 95%) e Temperatura Corporal (normal: 36-37.5°C). Status verde
              indica normalidade, vermelho indica alerta. A temperatura exibe tendências
              (↑ subindo, ↓ descendo, → estável).
            </p>
          </div>

          <div>
            <h3 className="font-bold">5. Localização GPS</h3>
            <p>
              No card "Localização GPS", clique em "Ver no Mapa" para visualizar o endereço
              completo e posição exata no mapa do OpenStreetMap. Informações incluem altitude,
              velocidade e número de satélites. Quanto mais satélites conectados, maior a precisão.
            </p>
          </div>

          <div>
            <h3 className="font-bold">6. Sistema de Emergência SOS</h3>
            <p>
              O usuário possui um botão físico no ESP32. Ao pressionar o botão SOS, um alerta
              é enviado instantaneamente, exibindo banner vermelho no aplicativo. Verifique
              imediatamente a localização GPS, contate emergência (192/193) ou o portador,
              e confira os sinais vitais.
            </p>
          </div>

          <div>
            <h3 className="font-bold">7. Detecção de Quedas</h3>
            <p>
              O acelerômetro detecta quedas automaticamente. Status: 🧍‍♀️ Estável (parado),
              🚶‍♀️ Em movimento (velocidade &gt; 0.5 km/h), ⚠️ Queda Detectada (impacto brusco),
              🔌 Sistema Offline. Em caso de queda, verifique GPS, sinais vitais e entre
              em contato imediatamente.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}