'use client'
import {FaArrowLeft, FaCubes} from "react-icons/fa6";
import {MdAdd, MdCategory, MdListAlt} from "react-icons/md";
import {useRouter} from "next/navigation";
import {Card} from "@/app/_ui/cards/Card";
import {CardBody} from "@/app/_ui/cards/CardBody";
import {CardHeader} from "@/app/_ui/cards/CardHeader";
import {CardFooter} from "@/app/_ui/cards/CardFooter";
import {CardList} from "@/app/_ui/cards/CardList";
import {CardAdd} from "@/app/_ui/cards/CardAdd";
import {Summary} from "@/app/_ui/texts/Summary";
import {CostInfos, FeatureInfos, TaskInfos, TimeInfos} from "@/app/_ui/texts/TextInfos";
import {Drawer} from "@/app/_ui/drawer/Drawer";
import {createDrawer} from "@/app/_hooks/drawer.hook";
import {DrawerBody} from "@/app/_ui/drawer/DrawerBody";
import {DrawerHeader} from "@/app/_ui/drawer/DrawerHeader";
import {ButtonIcon} from "@/app/_ui/buttons/ButtonIcon";
import {FaInfoCircle, FaTimes} from "react-icons/fa";
import {DrawerFooter} from "@/app/_ui/drawer/DrawerFooter";
import {Button} from "@/app/_ui/buttons/Button";

export default function Projects() {

    const drawer = createDrawer("drawer-project");
    const navigation = useRouter();

    return (
        <>
            <CardList>
                <CardAdd title={"Créer un projet"} onClick={drawer.openDrawer} />
                <Card onClick={() => navigation.push('/app/projects/859-89-898')}>
                    <CardBody>
                        <CardHeader>
                            <FaCubes size={36}/>
                            Super projet
                        </CardHeader>
                        <Summary>
                            Lorem ipsum blabla bla super contenu jrigeojg ioezjg roiez gjipozeg jeizog jrezigop ejzgioz egr
                            jfire gjiroezg jreg orezjg eizogrjeiog rjeiog ergj reiogjrezoig rjez ogjezirg
                            jgoziegjrgzregj ezg hijtroih ejtior hjie hjtre ohi
                            roje gzoirg pezgk
                            iejz gprgjoiezjgreoigz
                        </Summary>
                        <CardFooter>
                            <FeatureInfos />
                            <TaskInfos />
                            <TimeInfos />
                            <CostInfos />
                        </CardFooter>
                    </CardBody>
                </Card>
            </CardList>
            <Drawer drawer={drawer} side={'right'}>
                <DrawerBody>
                    <DrawerHeader>
                        <ButtonIcon className={'btn-ghost btn-rounded'} icon={<FaArrowLeft />} />
                        <ButtonIcon className={'btn-error btn-rounded'} icon={<FaTimes />} onClick={drawer.closeDrawer} />
                    </DrawerHeader>
                    <div className={'flex flex-col gap-1.5'}>
                        <h2 className="text-xl font-medium">Créer un nouveau projet</h2>
                        <p className={'text-sm text-content2 max-w-md'}>C'est ici que vous pourrez ordonner vos fonctionnalités, tâches et plus encore.</p>
                    </div>
                    <form className={'w-full flex flex-col mt-4'}>
                        <div className="form-group">
                            <div className="form-field">
                                <label htmlFor="" className="form-label">Titre de votre projet</label>
                                <input className={'input input-block input-ghost-primary input-sm'} type="text" placeholder={"Estimate-Hub"}/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="" className="form-label">Description de votre projet</label>
                                <textarea className={'textarea textarea-block textarea-ghost-primary'} placeholder={"Création d'un bouton comme composant avec ses tests..."} rows={5} />
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
                                    <label htmlFor="" className={'form-label'}>Définir la Période</label>
                                    <select name="period" id="" className={'select select-sm select-ghost-primary'}>
                                        <option value="h">Heures</option>
                                        <option value="d">Jours</option>
                                        <option value="m">Minutes</option>
                                        <option value="a">Articles</option>
                                        <option value="f">Forfait</option>
                                    </select>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="" className={'form-label'}>Définir la Devise</label>
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
