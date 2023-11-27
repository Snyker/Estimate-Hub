'use client'
import {
    FaArrowLeft,
    FaHourglass,
    FaMoneyBill1Wave,
} from "react-icons/fa6";
import {useRouter} from "next/navigation";
import {FaInfoCircle, FaListAlt, FaTasks, FaTimes} from "react-icons/fa";
import {CardAdd} from "@/app/_ui/cards/CardAdd";
import {Button} from "@/app/_ui/buttons/Button";
import {ButtonIcon} from "@/app/_ui/buttons/ButtonIcon";
import {Drawer} from "@/app/_ui/drawer/Drawer";
import {createDrawer} from "@/app/_hooks/drawer.hook";
import {DrawerBody} from "@/app/_ui/drawer/DrawerBody";
import {DrawerHeader} from "@/app/_ui/drawer/DrawerHeader";
import {DrawerFooter} from "@/app/_ui/drawer/DrawerFooter";
import {MdCategory, MdList, MdListAlt, MdTask, MdTaskAlt} from "react-icons/md";
import {CardList} from "@/app/_ui/cards/CardList";
import {Card} from "@/app/_ui/cards/Card";
import {CardBody} from "@/app/_ui/cards/CardBody";
import {CardHeader} from "@/app/_ui/cards/CardHeader";
import {CardFooter} from "@/app/_ui/cards/CardFooter";

export default function Projects() {

    const drawerTask = createDrawer('drawer-task');

    return (
        <>
            <CardList>
                <CardAdd title={"Ajouter une fonctionnalité"} onClick={drawerTask.openDrawer} />
                <Card>
                    <CardBody>
                        <CardHeader>
                            <MdCategory size={36}/>
                            Authentication
                        </CardHeader>
                        <p className="text-content2 text-sm text-ellipsis overflow-hidden line-clamp-3">
                            Lorem ipsum blabla bla super contenu jrigeojg ioezjg roiez gjipozeg jeizog jrezigop ejzgioz egr
                            jfire gjiroezg jreg orezjg eizogrjeiog rjeiog ergj reiogjrezoig rjez ogjezirg
                            jgoziegjrgzregj ezg hijtroih ejtior hjie hjtre ohi
                            roje gzoirg pezgk
                            iejz gprgjoiezjgreoigz
                        </p>
                        <CardFooter>
                            <div className={'flex flex-row gap-1.5 text-sm text-content3 items-center'}>
                                <FaListAlt />
                                <span>Tâches</span>
                                <span>8</span>
                            </div>
                            <div className={'flex flex-row gap-1.5 text-sm text-content3 items-center'}>
                                <FaHourglass />
                                <span>Temps total estimé</span>
                                <span>16h</span>
                            </div>
                            <div className={'flex flex-row gap-1.5 text-sm text-content3 items-center'}>
                                <FaMoneyBill1Wave />
                                <span>Coûts total</span>
                                <span>25€</span>
                            </div>
                        </CardFooter>
                    </CardBody>
                </Card>
            </CardList>
            <Drawer side={'right'} drawer={drawerTask}>
                <DrawerBody>
                    <DrawerHeader>
                        <ButtonIcon className={'btn-ghost btn-rounded'} icon={<FaArrowLeft />} />
                        <ButtonIcon className={'btn-error btn-rounded'} icon={<FaTimes />} onClick={drawerTask.closeDrawer} />
                    </DrawerHeader>
                    <div className={'flex flex-col gap-1.5'}>
                        <h2 className="text-xl font-medium">Ajouter une nouvelle tâche</h2>
                        <p className={'text-sm text-content2 max-w-md'}>Les tâches sont sur ce que vous travaillez concrètement, elle représente le plus bas niveau de votre travail.</p>
                    </div>
                    <form className={'w-full flex flex-col mt-4'}>
                        <div className="form-group">
                            <div className="form-field">
                                <label htmlFor="" className="form-label">Titre de votre tâche</label>
                                <input className={'input input-block input-ghost-primary input-sm'} type="text" placeholder={"Bouton UI/UX avec Test"}/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="" className="form-label">Description de votre tâche</label>
                                <textarea className={'textarea textarea-block textarea-ghost-primary'} placeholder={"Création d'un bouton comme composant avec ses tests..."} rows={10} />
                                <div className={'flex items-center text-content2 gap-1.5 text-xs'}>
                                    <FaInfoCircle />
                                    <span>185 caractères restants.</span>
                                </div>
                            </div>
                        </div>
                        <div className="divider py-2"></div>
                        <div className="form-group">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="form-field">
                                    <label htmlFor="" className="form-label">Temps d'estimation à la réalisation</label>
                                    <input className={'input input-block input-ghost-primary input-sm'} type="number" placeholder={"5"}/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="" className={'form-label'}>Période</label>
                                    <select name="period" id="" className={'select select-sm select-ghost-primary'}>
                                        <option value="h">Heures</option>
                                        <option value="d">Jours</option>
                                        <option value="m">Minutes</option>
                                        <option value="a">Articles</option>
                                        <option value="f">Forfait</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="form-field">
                                    <label htmlFor="" className="form-label">Coûts estimé à la réalisation</label>
                                    <input className={'input input-block input-ghost-primary input-sm '} type="text" placeholder={"Bouton UI/UX avec Test"}/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="" className={'form-label'}>Devise</label>
                                    <select name="devise" id="" className={'select select-sm select-ghost-primary'}>
                                        <option value="euro">Euros</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                    <DrawerFooter>
                        <Button className={'w-full'}>Créer</Button>
                    </DrawerFooter>
                </DrawerBody>
            </Drawer>
        </>

    )
}
