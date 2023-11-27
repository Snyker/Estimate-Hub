import type {Metadata} from 'next'
import {Leading1} from "@/app/_ui/leadings/Leading";
import {SpanDot} from "@/app/_ui/texts/SpanDot";
import {Button} from "@/app/_ui/buttons/Button";
import {ButtonIcon} from "@/app/_ui/buttons/ButtonIcon";
import {IconGoogle} from "@/app/_ui/icons/IconGoogle";
import {Anchor} from "@/app/_ui/links/Anchor";

export const metadata: Metadata = {
    title: 'Se connecter',
}

export default function Login() {

    const handleSubmit = () => {

    }

    return (
        <div className={'h-screen flex items-center bg-backgroundPrimary p-4 sm:p-0'}>
            <form className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-12">
                <div className="flex w-full flex-col gap-2">
                    <Leading1>Se connecter</Leading1>
                    <div className="flex w-full flex-col gap-2 ">
                        <ButtonIcon icon={<IconGoogle />}>Se connecter avec google</ButtonIcon>
                    </div>
                </div>
                <div className="divider my-4 text-xs text-content2">ou continuer avec</div>
                <div className="form-group">
                    <div className="form-field">
                        <label className="form-label">Adresse mail</label>
                        <input placeholder="example@myemail.com" type="email"
                               className="input max-w-full input-ghost-primary"/>
                        <SpanDot>Doit être un email valide.</SpanDot>
                    </div>
                    <div className="form-field">
                        <label className="form-label">Mot de passe</label>
                        <div className="form-control">
                            <input placeholder="super password" type="password"
                                   className="input max-w-full input-ghost-primary"/>
                        </div>
                        <div className={'flex flex-col'}>
                            <SpanDot>Entre 6 et 64 caractères</SpanDot>
                            <SpanDot>Contient un chiffre</SpanDot>
                            <SpanDot>Contient une majuscule</SpanDot>
                            <SpanDot>Contient un caractère spécial (!@#$%^&*)</SpanDot>
                        </div>
                    </div>
                    <div className="form-field">
                        <div className="form-control justify-between">
                            <div className="flex gap-2">
                                <input type="checkbox" className="checkbox"/>
                                <span>Se souvenir de moi</span>
                            </div>
                            <label className="form-label">
                                <Anchor href={'/forgot'}>Mot de passe oublié ?</Anchor>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2 gap-2">
                        <Button>Se connecter</Button>
                        <Anchor href={'/register'}>Pas encore de compte? Créer un compte</Anchor>
                    </div>
                </div>
            </form>
        </div>
    )
}
