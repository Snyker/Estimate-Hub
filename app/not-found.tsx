'use client'
import {Leading1} from "@/app/_ui/leadings/Leading";
import {useRouter} from "next/navigation";
import {Button} from "@/app/_ui/buttons/Button";

export default function NotFoundPage() {

    const navigation = useRouter();

    return (
        <div className={'flex h-screen w-full items-center justify-center'}>
            <div className={'gap-2 flex flex-col'}>
                <Leading1>Oups... Il n'y a rien ici</Leading1>
                <p className={'text-content2'}>Il semblerait que vous vous soyez égaré sur une page inconnue...</p>
                <Button className={'mt-2'} type={'button'} onClick={navigation.back}>Revenir en arrière</Button>
            </div>
        </div>
    )
}
