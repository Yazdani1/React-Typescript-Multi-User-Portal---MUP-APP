import React from 'react'
import "./UserListsCard.css";
import {UserDetailsProps} from "../DataProvider"

interface UserListsCardProps {

    user: UserDetailsProps

}

const UserListsCard = ({user}:UserListsCardProps) => {
  return (
    <div>UserListsCard</div>
  )
}

export default UserListsCard