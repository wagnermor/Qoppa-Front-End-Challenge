import express from 'express';
import chalk from 'chalk';
import { Request, Response } from 'express';
import figlet from 'figlet';

await figlet('QoppaTech', (err, data) => {
    if(err) {
        console.log(chalk.yellow("CANNOT LOAD FIGLET ART"));
    }

    console.log(chalk.blue(data));
})
console.log(chalk.blue("Bem vindo ao CLI da API do teste de front-end da QoppaTech."));
console.log(chalk.blue("Confira as informações em: ..."));
console.log("----------------------------------------------------------------")


const app = express();

app.use( express.json() );

app
.get("/", (req: Request, res: Response) => res.status(200).send("<h1>API DESAFIO: QoppaTech </h1>"))
.post("/singUp", (req: Request, res: Response) => {
    console.log(chalk.yellow("⏺ Requisição do tipo POST recebida na rota correta!"));

    const bd = req.body;

    if(bd.username === "root", bd.email === "root@root.com", bd.password === "admin") {
        console.log(chalk.green("✅ Reconhecido! Parabéns!"))
        return res.status(200).send();
    } else {

        console.log(chalk.red("⛔️ Dados enviados incorretos ou não recebidos, confira os dados que devem ser recebidos em: ..."));
        return res.status(401).send();
        
    }
})
.post("*", (req: Request, res: Response) => {
    console.log(chalk.red("❌ Requisição do tipo POST recebida na rota incorreta!"));
    return res.status(404).send();
})
.get("*", (req: Request, res: Response) => {
    return res.status(404).send("<h1>API DESAFIO: 404 -> PÁGINA NÃO ENCONTRADA -> quoppaTech </h1>")
})

app.listen(3000, () => console.log(chalk.green(`Qoppa_Desafio: Rodando na porta 3000`)));