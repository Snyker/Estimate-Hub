import type {Metadata} from 'next'
import {Leading1} from "@/app/_ui/leadings/Leading";
import {SpanDot} from "@/app/_ui/texts/SpanDot";
import {Button} from "@/app/_ui/buttons/Button";

export const metadata: Metadata = {
    title: 'Mot de passe oublié',
}

export default function Login() {

    const handleSubmit = () => {

    }

    return (
        <div className={'h-screen flex items-center bg-backgroundPrimary p-4 sm:p-0'}>
            <form className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-12">
                <div className="flex w-full flex-col gap-2">
                    <Leading1>Mot de passe oublié</Leading1>
                    <p className={'text-sm mb-4 text-center'}>Si votre email existe, vous recevrez un lien qui vous permettra de changer votre mot de passe.</p>
                </div>
                <div className="form-group">
                    <div className="form-field">
                        <label className="form-label">Adresse mail</label>
                        <input placeholder="example@myemail.com" type="email"
                               className="input max-w-full input-ghost-primary"/>
                        <SpanDot>Doit être un email valide.</SpanDot>
                    </div>
                    <div className="flex flex-col mt-2 gap-2">
                        <Button>Envoyer un code</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
