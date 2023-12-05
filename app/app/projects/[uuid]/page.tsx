import {Card} from "@/app/_ui/cards/Card";
import {CardBody} from "@/app/_ui/cards/CardBody";
import {CardHeader} from "@/app/_ui/cards/CardHeader";
import {ItemInfos} from "@/app/_ui/texts/TextInfos";
import {MdDelete, MdDownload, MdEdit, MdEmail, MdLink} from "react-icons/md";

export default function Projects() {
    return (
        <div className={`flex flex-wrap flex-row md:flex-nowrap w-full items-start gap-4`}>
            <div className={'basis-1/5 flex flex-col gap-2.5'}>
                <Card className={`basis-1/5`} animate={false}>
                    <CardBody>
                        <CardHeader>
                            <h4>Informations</h4>
                        </CardHeader>
                        <div className="flex flex-col">
                            <ItemInfos text={"Projet"} />
                            <ItemInfos text={"Numéro"} />
                            <ItemInfos text={"Devise"} />
                            <ItemInfos text={"Période"} />
                            <ItemInfos text={"Montant TTC"} />
                            <ItemInfos text={"Montant HT"} />
                            <ItemInfos text={"Durée totale"} />
                            <ItemInfos text={"Date"} />
                        </div>

                    </CardBody>
                </Card>
                <Card className={`basis-1/5`} animate={false}>
                    <CardBody>
                        <CardHeader>
                            <h4>Status</h4>
                        </CardHeader>
                        <ItemInfos text={"Etat"} quantity={'En attente'} />
                    </CardBody>
                </Card>
            </div>

            <Card className={`basis-3/5`} animate={false}>
                <CardBody>
                    <CardHeader>
                        <h4>Détails</h4>
                    </CardHeader>
                </CardBody>
            </Card>
            <Card className={`basis-1/5`} animate={false}>
                <CardBody>
                    <CardHeader>
                        <h4>Actions</h4>
                    </CardHeader>
                    <div className="flex flex-col">
                        <ItemInfos animate={true} text={"Télécharger"} icon={<MdDownload className={'text-blue-10'} />} />
                        <ItemInfos animate={true} text={"Envoyer"} icon={<MdEmail className={'text-yellow-10'} />} />
                        <ItemInfos animate={true} text={"Copier le lien public"} icon={<MdLink className={'text-blue-10'} />} />
                        <ItemInfos animate={true} text={"Éditer"} icon={<MdEdit className={'text-blue-10'} />} />
                        <ItemInfos animate={true} text={"Supprimer"} icon={<MdDelete className={'text-red-10'} />} />
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
