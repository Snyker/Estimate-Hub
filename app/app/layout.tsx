import React from 'react'
import {Menu} from "@/app/_ui/menu/Menu";
import {MenuSection} from "@/app/_ui/menu/MenuSection";
import {MenuItem} from "@/app/_ui/menu/MenuItem";
import {MdAnalytics, MdCategory, MdDashboard, MdHelp, MdLogout} from "react-icons/md";
import {GrProjects} from "react-icons/gr";
import {IoMdOptions} from "react-icons/io";
import {FaListAlt} from "react-icons/fa";

export default function AppLayout({children}: { children: React.ReactNode }) {

    return (
        <div className="flex flex-row ">
            <div className="sm:w-full sm:max-w-[18rem]">
                <input type="checkbox" id="sidebar-mobile-fixed" className="sidebar-state" />
                <label htmlFor="sidebar-mobile-fixed" className="sidebar-overlay"></label>
                <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
                    <section className="sidebar-content min-h-fit">
                        <Menu>
                            <MenuSection title={'Dashboard'}>
                                <MenuItem name={"Accueil"} href={'/app'} icon={<MdDashboard />} />
                                <MenuItem name={"Projets"} href={'/app/projects'} icon={<GrProjects />} />
                                <MenuItem name={"Fonctionnalitées"} href={'/app/features'} icon={<MdCategory />} />
                                <MenuItem name={"Tâches"} href={'/app/tasks'} icon={<FaListAlt />} />
                            </MenuSection>
                            <MenuSection title={'Statistiques'}>
                                <MenuItem name={"Tracker"} href={'/app/test'} icon={<MdAnalytics />} />
                            </MenuSection>
                            <MenuSection title={'Utilisateur'}>
                                <MenuItem name={"Options"} href={'/profile/options'} icon={<IoMdOptions />} />
                                <MenuItem name={"Aide"} href={'/help'} icon={<MdHelp />} />
                                <MenuItem name={"Se déconnecter"} href={'/profile/logout'} icon={<MdLogout />} />
                            </MenuSection>
                        </Menu>
                    </section>
                </aside>
            </div>
            <div className="flex w-full flex-row flex-wrap gap-4 p-6">
                {children}
            </div>
        </div>
    )
}
