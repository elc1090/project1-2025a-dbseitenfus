import { Button } from "./ui/button"
import { Input } from "./ui/input"


export default function Footer() {


    const footerList = {
        "Departamentos": [
            "Hardware",
            "Celular e Smartphone",
            "Periféricos",
            "Teclado e Mouse",
            "Computadores",
            "Placa de Vídeo",
            "Monitores",
            "Consoles e Games",
            "Áudio",
            "TV",
            "Eletrodomésticos",
            "Eletroportáteis",
        ],
        "Novidades e Promoções": [
            "Blog KaBuM!",
            "Seja Prime",
            "Black Friday",
            "Mega Maio",
            "Julho Gamer",
            "Pix",
            "Oferta do dia",
            "Gift Card KaBuM!",
            "Tecnologia 5G",
            "Venda no KaBuM!",
            "Monte seu PC Gamer",
            "Mulheres no Game",
            "Cupons",
            "Regulamentos",
            "Lojas Parceiras"
        ],
        "Institucional": [
            "Sobre o KaBuM!",
            "KaBuM! ADS",
            "Políticas do Site e Marketplace",
            "Políticas de Cookies",
            "Políticas de Privacidade",
            "Trabalhe Conosco",
            "Código de Defesa do Consumidor",
            "Exerça seus Direitos de Privacidade",
            "Código de Conduta e Ética",
            "Canal Confidencial",
            "Segurança & Privacidade",
            "Relatórios"
        ],
        "Acessibilidade": [
            "Acessibilidade"
        ],

        "Minha Conta": [
            "Meus Pedidos",
            "Cadastrar ou Remover Newsletter"
        ],
"Atendimento": [
    "Horário de atendimento:",
    "08:00 às 20:00 - Segunda a Sexta,",
    "09:00 às 15:00 - Sábado,",
    "horário de Brasília",
    "(Exceto domingo e feriados)",
    "Endereço:",
    "Rua Carlos Gomes, 1321 -",
    "9° andar - Centro",
    "Limeira/SP - CEP: 13480-010"
]

    }

    return (
        <footer className="mt-5">
            <div className="bg-blue-800 w-full flex text-white p-7 flex justify-between items-center">
                <div className="flex flex-col justify-start items-center">
                    <h1><b>KaBum! News</b></h1>
                    {/* <p>Receba ofertas</p> */}
                </div>

                <Input
                    type="text"
                    placeholder="Qual é o seu nome?"
                    className="pl-10 h-[50px] bg-white ml-40 ml-10"
                />

                <Input
                    type="text"
                    placeholder="Seu e-mail?"
                    className="pl-10 h-[50px] bg-white ml-40 ml-10"
                />

                <Button className="bg-orange-600 w-[200px] h-[50px] ml-40 ml-10">
                    CADASTRAR
                </Button>
                
            </div>
            <div className="bg-blue-700 w-full flex text-white p-7">
                {Object.keys(footerList).map((item, index) => (
                    <ul key={index} className="mr-10">
                        <p className="text-sm"><b>{item}</b></p>
                        {footerList[item].map((subItem, subIndex) => (
                            <li key={subIndex} className="text-xs mt-2">{subItem}</li>
                        ))}
                    </ul>
                ))}
            </div>
            <div className="bg-white w-full h-[100px]"> 

            </div>
            <div className="bg-blue-800 w-full  p-8 flex flex-col justify-center items-center text-white"> 
                <p><b>Uma empresa do grupo MAGALU</b></p>
                <p className="text-[10px] mt-5 text-center"><b>KaBuM!® é uma marca registrada de KABUM S.A | CNPJ: 05.570.714/0001-59 | Todos os direitos reservados. Os preços anunciados neste site ou via e-mail promocional podem ser alterados sem prévio aviso. O KaBuM! não é responsável por erros descritivos. As fotos contidas nesta página são meramente ilustrativas do produto e podem variar de acordo com o fornecedor/lote do fabricante. Este site trabalha 100% em criptografia SSL.  Clique aqui e veja as políticas de nossa empresa.</b></p>
            </div>
        </footer>
    )
}