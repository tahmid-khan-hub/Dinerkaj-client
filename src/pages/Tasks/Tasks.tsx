import SignInSuccessAlert from "../SignIn/components/SignInSuccessAlert";
import TasksPageHeading from "./components/TasksPageHeading";

export default function TasksPage(){
    return (
        <>
            <SignInSuccessAlert />

            {/* components */}
            <TasksPageHeading />
        </>
    )
}