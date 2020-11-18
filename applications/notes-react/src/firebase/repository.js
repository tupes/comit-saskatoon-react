import {db} from './firebase';

export async function getNotes() {
    const notes = [];
    const notesRef = db.ref("/notes");
    const dataSnapshot = await notesRef.once("value");
    dataSnapshot.forEach((noteSnapshot) => {
      const note = noteSnapshot.val();
      notes.push(note);
    });
    console.log(notes);
    return notes;
  }


  export async function getNavItems() {
    const navitems = [];
    const navitemsRef = db.ref("/navitems");
    const dataSnapshot = await navitemsRef.once("value");
    dataSnapshot.forEach((navItemSnapshot) => {
      const navItem = navItemSnapshot.val();
      navitems.push(navItem);
    });
    console.log(navitems);
    return navitems;
  }