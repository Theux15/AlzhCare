import { Header } from "./Header.jsx";

export function GuiaInstrucao() {
    return (
        <div className="bg-[var(--color-chatcolor)] dark:bg-[var(--color-dark-purple-home)] min-h-screen">
            <Header />


            <div className="flex flex-col items-center justify-center mt-10 [color:var(--color-dark-purple)]">
                <h1 className="text-6xl font-bold mb-2">Guia de instruções</h1>
                <p className="text-lg font-medium [color:var(--color-dark-purple)] ">
                    Siga as instruções de utilização do AlzhCare
                </p>
            </div>


            <div className="flex justify-center mt-10">
                <div className="w-[600px] h-[350px] bg-gray-400 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-5xl">▶</span>
                </div>
            </div>


            <div className="max-w-4xl mx-auto mt-12 mb-20 px-6">
                <h2 className="text-4xl font-bold text-center mb-8 [color:var(--color-dark-purple)]">
                    Guia de Utilização <br />
                    <span className="text-2xl">Mochila Inteligente para Alzheimer</span>
                </h2>

                <div className="flex flex-col gap-6 text-lg leading-relaxed text-justify [color:var(--color-dark-purple)]">
                    <div>
                        <h3 className="font-bold">1. Como conectar o aplicativo à mochila?</h3>
                        <p>
                            Ligue a mochila e ative o ESP32. No aplicativo, abra a tela de conexão
                            Bluetooth/Wi-Fi e selecione o dispositivo correspondente à mochila na lista
                            disponível. Após a conexão ser estabelecida, você verá o status
                            "Conectado" no app.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold">2. Como configurar o GPS pelo aplicativo?</h3>
                        <p>
                            No menu principal do app, selecione "Configurações GPS". Aqui, você pode
                            ativar ou desativar o rastreamento, definir a frequência de atualização da
                            localização e visualizar o histórico de posições em um mapa integrado.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold">3. Como programar lembretes pelo app?</h3>
                        <p>
                            Acesse a aba de Lembretes e clique em "Novo Lembrete". Insira o título,
                            descrição, horário e recorrência (diária, semanal, etc.). O lembrete será
                            enviado automaticamente para a mochila, que emitirá alertas sonoros ou
                            vibratórios para o usuário.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold">4. Como ativar o reconhecimento de pessoas?</h3>
                        <p>
                            Na seção "Reconhecimento Facial", habilite a opção. Tire ou selecione fotos
                            das pessoas próximas ao usuário. Ao identificar pessoas conhecidas se
                            aproximando, a mochila emitirá notificações para maior segurança.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold">
                            5. O que fazer se a conexão entre app e mochila for perdida?
                        </h3>
                        <p>
                            Verifique se o ESP32 está conectado e funcionando. Reinicie a conexão via
                            Bluetooth/Wi-Fi no aplicativo. Caso persista, reinicie a mochila e o app
                            para restabelecer a comunicação.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold">
                            6. Como verificar o status da bateria do ESP32 via aplicativo?
                        </h3>
                        <p>
                            No app, vá até a seção "Bateria" para visualizar a porcentagem atual de
                            carga. Se houver necessidade, conecte a mochila ao carregador portátil para
                            evitar desligamentos inesperados.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold">
                            7. Como rastrear a mochila em tempo real?
                        </h3>
                        <p>
                            Acesse a aba "Status" e siga as informações com dados atualizados de
                            localização, exibidos em um mapa interativo. Também é possível definir
                            geofences (cercas virtuais), permitindo que cuidadores acompanhem o
                            funcionamento e recebam alertas.
                        </p>
                    </div>
                </div>
            </div>


            <div className="bg-light-purple py-8 text-center">
                <p className="text-lg font-semibold [color:var(--color-dark-purple)]">
                    © 2025 AlzhCare - Todos os direitos reservados
                </p>
            </div>
        </div>
    ); 
}    