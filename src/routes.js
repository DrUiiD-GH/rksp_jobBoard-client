import MyVacancies from "./pages/MyVacancies";
import {
    CREAT_NEW_VACANCY_ROUTE,
    EDIT_VACANCY_ROUTE,
    JOB_BOARD_ROUTE,
    LOGIN_ROUTE,
    MY_VACANCIES_ROUTE, REGISTRATION_ROUTE, VACANCY_ROUTE
} from "./utils/consts";
import EditVacancyPage from "./pages/EditVacancyPage";
import JobBoard from "./pages/JobBoard";
import Auth from "./pages/Auth";
import VacancyPage from "./pages/VacancyPage";

export const authRoutes = [
    {
        path:MY_VACANCIES_ROUTE,
        Component:MyVacancies
    },
    {
        path:CREAT_NEW_VACANCY_ROUTE,
        Component:EditVacancyPage
    },
    {
        path:EDIT_VACANCY_ROUTE + '/:id',
        Component:EditVacancyPage
    }
]

export const publicRoutes = [
    {
        path:JOB_BOARD_ROUTE,
        Component:JobBoard
    },
    {
        path:LOGIN_ROUTE,
        Component:Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component:Auth
    },
    {
        path:VACANCY_ROUTE + '/:id',
        Component:VacancyPage
    }
]