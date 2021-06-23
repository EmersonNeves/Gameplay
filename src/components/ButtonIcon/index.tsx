import React from 'react'
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps} from 'react-native'

import DiscordImage from '../../assets/discord.png'

import {styles} from './styles'

type buttonIconProps = TouchableOpacityProps & {
    title: string,
}


export function ButtonIcon({title, ...rest}:buttonIconProps ){
    return(
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImage} style={styles.icon}/>
            </View>
            <Text style={styles.textIcon}>{title}</Text>
        </TouchableOpacity>
    )
}