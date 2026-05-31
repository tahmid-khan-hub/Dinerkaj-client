import SignInSuccessAlert from "../SignIn/components/SignInSuccessAlert";
import TaskItem from "./components/TaskItem";
import TasksPageHeading from "./components/TasksPageHeading";

export default function TasksPage(){
    return (
        <>
            <SignInSuccessAlert />

            {/* components */}
            <TasksPageHeading />
            <TaskItem />
        </>
    )
}