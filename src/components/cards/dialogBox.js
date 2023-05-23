import { View, Modal, Text } from 'react-native'
import React from 'react'

export default function DialogBox({ visible }) {

    return (
        <Modal
            animationType="slide"
            visible={visible}
            transparent={true}
        >
            <Text>Este es un Modal</Text>
        </Modal>
    )
}