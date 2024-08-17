import React, { useEffect } from 'react'
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Route, Routes } from "react-router-dom";

import { Navbar, Footer, Sidebar, ThemeSettings } from "../../components/admin/index.jsx";

import useGeneralContext from '../../context/GeneralContext.js'

import { AdminProvider } from '../../context/AdminContext.js';

import {
    Ecommerce,
    Orders,
    Calendar,
    Employees,
    Stacked,
    Pyramid,
    Customers,
    Kanban,
    Line,
    Area,
    Bar,
    Pie,
    Financial,
    ColorPicker,
    ColorMapping,
    Editor,
} from "./index.jsx";

const AdminPanel = () => {

    const {
        user,
        setCurrentColor,
        setCurrentMode,
        currentMode,
        activeMenu,
        currentColor,
        themeSettings,
        setThemeSettings,
        setCurrentLng,
        setLng,
    } = useGeneralContext();
    useEffect(() => {
        const currentThemeColor = localStorage.getItem("colorMode");
        const currentThemeMode = localStorage.getItem("themeMode");
        const currentThemeLngId = localStorage.getItem("currentLngId");
        const currentThemeLngName = localStorage.getItem("currentLngName");

        if (currentThemeLngId && currentThemeLngName) {
            setCurrentLng({ id: currentThemeLngId, name: currentThemeLngName });
            setLng({ id: currentThemeLngId, name: currentThemeLngName });
        }
        else {
            setCurrentLng({ id: 'ltr', name: 'en' });
            setLng({ id: 'ltr', name: 'en' });
        }
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>

            <div className="flex relative dark:bg-main-dark-bg">
                <div
                    className="fixed ltr:right-4 rtl:left-4 bottom-4"
                    style={{ zIndex: "1000" }}
                >
                    <TooltipComponent content="Settings" position="Top">
                        <button
                            type="button"
                            onClick={() => setThemeSettings(true)}
                            style={{ background: currentColor, borderRadius: "50%" }}
                            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div
                    className={
                        activeMenu
                            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen ltr:md:ml-72 rtl:md:mr-72 w-full"
                            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                    }
                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar />
                    </div>
                    <div>
                        {themeSettings && <ThemeSettings />}
                        <AdminProvider>
                            <Routes>
                                {/* dashboard  */}
                                <Route path="/admin" element={<Ecommerce />} />
                                <Route path="admin/ecommerce" element={<Ecommerce />} />

                                {/* pages  */}
                                <Route path="/admin/orders" element={<Orders />} />
                                <Route path="/admin/employees" element={<Employees />} />
                                <Route path="/admin/customers" element={<Customers />} />

                                {/* apps  */}
                                <Route path="/admin/kanban" element={<Kanban />} />
                                <Route path="/admin/editor" element={<Editor />} />
                                <Route path="/admin/calendar" element={<Calendar />} />
                                <Route path="/admin/color-picker" element={<ColorPicker />} />

                                {/* charts  */}
                                <Route path="/admin/line" element={<Line />} />
                                <Route path="/admin/area" element={<Area />} />
                                <Route path="/admin/bar" element={<Bar />} />
                                <Route path="/admin/pie" element={<Pie />} />
                                <Route path="/admin/financial" element={<Financial />} />
                                <Route path="/admin/color-mapping" element={<ColorMapping />} />
                                <Route path="/admin/pyramid" element={<Pyramid />} />
                                <Route path="/admin/stacked" element={<Stacked />} />
                            </Routes>
                        </AdminProvider>
                    </div>
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default AdminPanel