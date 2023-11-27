import type {Metadata} from 'next'
import {Leading1} from "@/app/_ui/leadings/Leading";
import {SpanDot} from "@/app/_ui/texts/SpanDot";
import {Button} from "@/app/_ui/buttons/Button";
import {ButtonIcon} from "@/app/_ui/buttons/ButtonIcon";
import {IconGoogle} from "@/app/_ui/icons/IconGoogle";
import Link from "next/link";
import {Anchor} from "@/app/_ui/links/Anchor";

export const metadata: Metadata = {
    title: "S'inscrire",
}

export default function Login() {

    const handleSubmit = () => {

    }

    return (
        <div className={'h-screen flex items-center bg-backgroundPrimary p-4 md:p-0'}>
            <form
                className="mx-auto flex w-full max-w-2xl flex-col rounded-xl border border-border bg-backgroundSecondary p-4 md:p-12">
                <div className="flex w-full flex-col gap-2">
                    <Leading1>S'inscrire</Leading1>
                    <div className="flex w-full flex-col gap-2 ">
                        <ButtonIcon icon={<IconGoogle />}>S'inscrire avec google</ButtonIcon>
                    </div>
                </div>
                <div className="divider my-4 text-xs text-content2">ou continuer avec</div>
                <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
                    <div className="form-group">
                        <div className="form-field">
                            <label className="form-label">Nom de famille</label>
                            <input placeholder="Doe" type="text"
                                   maxLength={64}
                                   minLength={2}
                                   className="input max-w-full input-ghost-primary"/>
                            <SpanDot>Entre 2 et 64 caractères</SpanDot>
                        </div>
                        <div className="form-field">
                            <label className="form-label">Prénom</label>
                            <input placeholder="John" type="text"
                                   maxLength={64}
                                   minLength={2}
                                   className="input max-w-full input-ghost-primary"/>
                            <SpanDot>Entre 2 et 64 caractères</SpanDot>
                        </div>
                    </div>
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
                    </div>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                    <Button>Créer un compte</Button>
                    <Anchor href={"/login"}>Déjà inscrit? Se connecter</Anchor>
                </div>
            </form>
        </div>
    )
}
