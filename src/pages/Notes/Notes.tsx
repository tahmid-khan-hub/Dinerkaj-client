import { useState } from "react";
import NotesPageHeading from "./components/NotesPageHeading/NotesPageHeading";
import NotesPageModal from "./components/NotesPageModal/NotesPageModal";

export default function NotesPage(){
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <NotesPageHeading onOpen={() => setOpenModal(true)} />

            {/* notes page modal */}
            <NotesPageModal open={openModal} onClose={() => setOpenModal(false)} />
        </>
    )
}