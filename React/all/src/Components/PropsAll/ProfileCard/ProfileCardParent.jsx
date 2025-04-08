// import React from 'react'
// import ProfileCardChild from './ProfileCardChild'

// const ProfileCardParent = () => {
//   return (
//     <>
//       <h1>Profile Card</h1>
//       <div style={{ display: "flex" }}>
//         <ProfileCardChild name="Abc" age={25} image="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg" />

//         <ProfileCardChild name="Bcd" age={28} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_EIOl--IT18WRgGFX48n81TGG3yqffteHhFLfPXNDKTdp479RbskwywE_ROVyJoha7Y&usqp=CAU" />

//         <ProfileCardChild name="Cde" age={28} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHytcaoXDqynWuboDMnjyJ-kG1mxiWQGGuzzTGOWize35jKiP9VUWvOUhkEZtXYOxexKQ&usqp=CAU" />

//         <ProfileCardChild name="Def" age={28} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbI78v3a7Q5Tcm1DrdpZ7KEH2-ArooT9qzvFe6cLOYxy4wY-hp6dG-NrJKyv9_n5Hcjs&usqp=CAU" />

//       </div>
//     </>
//   )
// }

// export default ProfileCardParent

import React from "react";
import ProfileCardChildren from "./ProfileCardChild";

const ProfileCardParent = () => {

  return (

    <div>
      <h2>Profile Card</h2>
      <div style={{ display: "flex" }}>
        <ProfileCardChildren name="Arbaz" age={28} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbI78v3a7Q5Tcm1DrdpZ7KEH2-ArooT9qzvFe6cLOYxy4wY-hp6dG-NrJKyv9_n5Hcjs&usqp=CAU" />

        <ProfileCardChildren name="Mukund" age={24} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHytcaoXDqynWuboDMnjyJ-kG1mxiWQGGuzzTGOWize35jKiP9VUWvOUhkEZtXYOxexKQ&usqp=CAU" />

        <ProfileCardChildren name="Mani" age={25} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_EIOl--IT18WRgGFX48n81TGG3yqffteHhFLfPXNDKTdp479RbskwywE_ROVyJoha7Y&usqp=CAU" />

        <ProfileCardChildren name="Sabir" age={22} image="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg" />
      </div>

    </div>
  )
}

export default ProfileCardParent;