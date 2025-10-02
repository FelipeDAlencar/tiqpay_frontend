
import logo_image from "../../assets/images/logo.png";

export const TermsAndConditionsPage = () => {
    //const hook = useLoginModalHook();
    // const navigate = useNavigate();
    return (
        <div className="w-full h-full bg-white mb-12">
            <div className="flex justify-center items-center mt-8 mb-8">
                <img
                    src={logo_image}
                    alt={'Logo TiqPay revestimento'}
                    className=" object-cover rounded-lg"
                />
            </div>
            <div className="pl-26 pr-26">
                <div data-property-1="Default" className="w-full px-6 py-4 rounded-lg shadow-md outline-offset-[-0.50px] outline-Color-stroke-Minimal inline-flex flex-col justify-start items-start gap-1 border border-[#E0E0E0]">
                    <span className="mb-4 text-4xl font-black text-[#212121]">
                        TERMOS E CONDIÇÕES DE USO — TIQPAY / TIQAPP / PAGTIQ
                    </span>
                    <hr className="w-full mb-2 border-t border-[#212121] rounded-lg shadow-md outline-offset-[-0.50px]" />
                    <p className="text-base font-black text-[#212121] mb-4">
                        Última atualização: 01 de Outubro de 2025
                    </p>

                    <p className="text-lg font-bold text-[#4067e6] mb-2">
                        1. SOBRE O TIQPAY
                    </p>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        A TiqPay Tecnologia e Pagamentos Ltda., inscrita no CNPJ sob o nº 61.174.460/0001-20, com sede na Av. Governador Lindenberg, nº 1066. CXPST 358, Centro, Linhares/ES, CEP 29.900-020, oferece soluções digitais para recebimento via PIX e ferramentas de inteligência de vendas, fidelização de clientes e gestão de pagamentos, acessíveis por meio do aplicativo TiqApp e demais plataformas vinculadas. Ao utilizar o TiqApp, você declara estar ciente e concorda com os presentes Termos e Condições de Uso.
                    </p>
                    {/* 2. ACEITAÇÃO DOS TERMOS */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">2. ACEITAÇÃO DOS TERMOS</p>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        Ao criar uma conta ou usar qualquer funcionalidade do TiqApp, você declara que leu, compreendeu e aceita integralmente este Termo. Caso não concorde, não deverá utilizar nossos serviços.
                    </p>

                    {/* 3. SERVIÇOS OFERECIDOS */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">3. SERVIÇOS OFERECIDOS</p>
                    <p className="text-base font-medium text-[#212121] mb-2">
                        O TiqPay disponibiliza, entre outros recursos:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-base font-medium text-[#212121]">
                        <li>Recebimento de pagamentos via PIX com validação em tempo real, por meio de integrações com Open Finance e infraestrutura própria.</li>
                        <li>Confirmação de liquidação diretamente na conta bancária do lojista, garantindo maior segurança contra fraudes.</li>
                        <li>Dashboard e relatórios analíticos com dados de vendas, comportamento de clientes, NPS e pesquisas rápidas.</li>
                        <li>Ferramentas de fidelização e marketing, como pontos, recompensas e campanhas direcionadas.</li>
                        <li>Consultoria de Inteligência Artificial para apoio em decisões estratégicas do negócio.</li>
                    </ul>

                    {/* 4. CADASTRO E VERACIDADE DAS INFORMAÇÕES */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">4. CADASTRO E VERACIDADE DAS INFORMAÇÕES</p>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        Para utilizar os serviços, o Usuário deve fornecer dados corretos, completos e atualizados. O TiqPay poderá solicitar documentos ou informações adicionais para verificação de identidade e conformidade regulatória.
                    </p>

                    {/* 5. USO ADEQUADO E PROIBIÇÕES */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">5. USO ADEQUADO E PROIBIÇÕES</p>
                    <p className="text-base font-medium text-[#212121] mb-2">
                        O Usuário compromete-se a utilizar o TiqApp apenas para fins lícitos e de acordo com a legislação vigente, sendo expressamente proibido:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-base font-medium text-[#212121]">
                        <li>Realizar atividades que infrinjam leis aplicáveis, incluindo, mas não se limitando, à lavagem de dinheiro, financiamento de atividades ilícitas ou fraudes financeiras;</li>
                        <li>Utilizar a plataforma para processar pagamentos que não correspondam a transações legítimas de bens ou serviços;</li>
                        <li>Tentar contornar sistemas de segurança, realizar engenharia reversa ou explorar vulnerabilidades do TiqPay.</li>
                    </ul>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        O descumprimento destas regras pode resultar na suspensão imediata da conta, sem direito a reembolso de valores já pagos, além de comunicação às autoridades competentes, quando aplicável.
                    </p>

                    {/* 6. CONSENTIMENTO OPEN FINANCE */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">6. CONSENTIMENTO OPEN FINANCE</p>
                    <p className="text-base font-medium text-[#212121] mb-2">
                        Ao optar por integrar contas bancárias, o Usuário autoriza o TiqPay a acessar, por meio do Open Finance, informações de conta e transações, exclusivamente para:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-base font-medium text-[#212121]">
                        <li>Validar recebimentos PIX em tempo real;</li>
                        <li>Iniciar ordens de pagamento PIX;</li>
                        <li>Disponibilizar relatórios e insights no dashboard.</li>
                    </ul>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        O consentimento é dado dentro do fluxo oficial do Open Finance e pode ser revogado a qualquer momento pelo Usuário em seu banco ou dentro do TiqApp.
                    </p>

                    {/* 7. PLANOS, ASSINATURA E PAGAMENTOS */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">7. PLANOS, ASSINATURA E PAGAMENTOS</p>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        O uso do TiqApp é realizado mediante planos de assinatura mensal, conforme a tabela vigente disponível em nosso site. Cada plano inclui uma franquia de transações PIX mensais; excedentes serão cobrados conforme valores informados no momento da contratação. Os preços podem ser ajustados mediante aviso prévio de 30 dias. A cobrança será recorrente no cartão ou meio de pagamento escolhido no momento da assinatura. Cancelamentos podem ser solicitados a qualquer momento, com efeitos a partir do próximo ciclo de cobrança.
                    </p>

                    {/* 8. RESPONSABILIDADE SOBRE PAGAMENTOS */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">8. RESPONSABILIDADE SOBRE PAGAMENTOS</p>
                    <p className="text-base font-medium text-[#212121] mb-2">
                        O TiqPay atua como iniciador e validador de pagamentos via PIX, mas não é instituição financeira e não realiza a liquidação final das transações, que ocorre diretamente entre o banco do pagador e o banco do recebedor, conforme regras do Banco Central.
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-base font-medium text-[#212121]">
                        <li>Indisponibilidade dos sistemas bancários;</li>
                        <li>Falhas de autenticação junto ao banco do usuário;</li>
                        <li>Não liquidação do pagamento por motivos atribuíveis à instituição financeira.</li>
                    </ul>

                    {/* 9. SEGURANÇA E PREVENÇÃO À FRAUDE */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">9. SEGURANÇA E PREVENÇÃO À FRAUDE</p>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        O TiqPay utiliza protocolos de segurança e conformidade com o Banco Central e Open Finance. No entanto, o Usuário é responsável por manter seus dispositivos protegidos, não compartilhar credenciais e conferir valores antes de confirmar pagamentos.
                    </p>

                    {/* 10. TRATAMENTO DE DADOS PESSOAIS — LGPD */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">10. TRATAMENTO DE DADOS PESSOAIS — LGPD</p>
                    <ul className="list-disc pl-6 mb-4 text-base font-medium text-[#212121]">
                        <li>Dados coletados: informações de cadastro, identificação, dados bancários e transacionais necessários para execução dos serviços.</li>
                        <li>Finalidade: processar pagamentos, validar transações, emitir relatórios, campanhas de fidelização e comunicações necessárias.</li>
                        <li>Compartilhamento: apenas com instituições financeiras e provedores essenciais para funcionamento da plataforma.</li>
                        <li>Direitos do titular: acesso, correção, portabilidade, eliminação e informações sobre uso de dados podem ser solicitados via e-mail tiqpay@jonnpo.com.br.</li>
                    </ul>

                    {/* 11. LIMITAÇÃO DE RESPONSABILIDADE */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">11. LIMITAÇÃO DE RESPONSABILIDADE</p>
                    <ul className="list-disc pl-6 mb-4 text-base font-medium text-[#212121]">
                        <li>Perdas indiretas, lucros cessantes ou danos decorrentes do uso da plataforma;</li>
                        <li>Falhas externas, como indisponibilidade de redes bancárias ou do PIX;</li>
                        <li>Decisões de negócios tomadas com base em dados fornecidos pelo dashboard.</li>
                    </ul>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        Exceto em casos de dolo ou fraude comprovada, a responsabilidade total do TiqPay em relação a qualquer dano direto decorrente do uso da plataforma ficará limitada ao valor total efetivamente pago pelo Usuário à TiqPay nos três (3) meses anteriores ao evento que deu origem à responsabilidade.
                    </p>

                    {/* 12. CONSULTORIA POR INTELIGÊNCIA ARTIFICIAL (IA) */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">12. CONSULTORIA POR INTELIGÊNCIA ARTIFICIAL (IA)</p>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        O TiqPay disponibiliza recursos de inteligência artificial com objetivo de auxiliar o Usuário em análises e tomadas de decisão estratégicas para seu negócio. Tais recomendações têm caráter meramente informativo e baseiam-se em dados fornecidos pelo próprio Usuário e por integrações autorizadas. O TiqPay não garante precisão, atualidade ou adequação das sugestões da IA para qualquer finalidade específica, nem se responsabiliza por decisões tomadas ou resultados obtidos a partir dessas informações. A responsabilidade pela adoção de estratégias, campanhas, preços, promoções ou quaisquer ações sugeridas pela IA é exclusivamente do Usuário. Esta disposição complementa e deve ser interpretada em conjunto com a cláusula de Limitação de Responsabilidade destes Termos.
                    </p>

                    {/* 13. MODIFICAÇÃO OU DESCONTINUIDADE DOS SERVIÇOS */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">13. MODIFICAÇÃO OU DESCONTINUIDADE DOS SERVIÇOS</p>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        O TiqPay pode, a qualquer momento, modificar ou descontinuar funcionalidades, mediante comunicação prévia quando houver impacto significativo para o Usuário.
                    </p>

                    {/* 14. CANCELAMENTO E EXCLUSÃO DE CONTA */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">14. CANCELAMENTO E EXCLUSÃO DE CONTA</p>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        O Usuário pode solicitar o cancelamento a qualquer momento. Dados pessoais serão excluídos ou anonimizados conforme a LGPD, salvo obrigações legais de retenção. O cancelamento da assinatura terá efeito somente ao final do ciclo de cobrança vigente, não havendo reembolso de valores já pagos, salvo quando exigido por lei ou autorizado pelo TiqPay a seu exclusivo critério.
                    </p>

                    {/* 15. ENCARREGADO PELO TRATAMENTO DE DADOS (DPO) */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">15. ENCARREGADO PELO TRATAMENTO DE DADOS (DPO)</p>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), o TiqPay nomeia como Encarregado pelo Tratamento de Dados Pessoais (Data Protection Officer – DPO):<br />
                        Nome: Luciano Billotta<br />
                        E-mail para contato: luciano.billotta@jonnpo.com.br<br />
                        O Encarregado é responsável por receber comunicações dos titulares de dados pessoais e da Autoridade Nacional de Proteção de Dados (ANPD), bem como orientar os colaboradores e parceiros do TiqPay sobre práticas de privacidade e proteção de dados.
                    </p>

                    {/* 16. PROPRIEDADE INTELECTUAL */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">16. PROPRIEDADE INTELECTUAL</p>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        Todas as marcas, códigos, metodologias e conteúdos do TiqPay são de titularidade exclusiva da TiqPay Tecnologia e Pagamentos Ltda. É proibida qualquer reprodução ou uso não autorizado.
                    </p>

                    {/* 17. LEGISLAÇÃO E FORO */}
                    <p className="text-lg font-bold text-[#4067e6] mb-2">17. LEGISLAÇÃO E FORO</p>
                    <p className="text-base font-medium text-[#212121] mb-4">
                        Este Termo é regido pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de Vitória/ES, com renúncia expressa a qualquer outro, por mais privilegiado que seja, como competente para dirimir quaisquer questões decorrentes destes Termos de Uso.
                    </p>


                </div>
            </div>

        </div>
    )
}