import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ListItem, Avatar } from 'react-native-elements'

const CustomListitem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem key={id} bottomDivider>
            <Avatar
                rounded
                source={{
                    uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",           
                }}
            />
            <ListItem.Content>
                <ListItem.Title styles={{ fontWeight: "2000"  }}>
                 {chatName}
                </ListItem.Title>
                <ListItem.Subtitle
                    numberOfLines={1}
                    ellipsizeMode='tail'>
                   ABC
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListitem

const styles = StyleSheet.create({})
