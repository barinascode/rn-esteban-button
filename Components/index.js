import React from 'react'
import { TouchableOpacity } from 'react-native'
import Theme from '../../../assets/styles'

function index(props){
    
    const { primaryColor, positiveColor, negativeColor, darkText, disabledColor, primaryTextColor, disabledBgColor } = Theme


    let buttonStyle = {
        width : 100,
        height : 40,
        backgroundColor : 'grey',
        alignItems: 'center',
        justifyContent : 'center'
    }

    let textStyle = {
        fontSize : 11,
        color : 'black',
    }



    // Button styles
        if(props.primary)
            buttonStyle.backgroundColor = primaryColor

        if( props.bot ){
            buttonStyle = {
                ...buttonStyle,
                position : 'absolute',
                bottom : 20,
            }
        }



        buttonStyle.backgroundColor = primaryColor

        if(props.positive)
            buttonStyle.backgroundColor = positiveColor

        if(props.negative)
            buttonStyle.backgroundColor = negativeColor
        
        if(props.disabled)
            buttonStyle.backgroundColor = disabledColor

        if(props.round)
            buttonStyle.borderRadius = props.round

        if(props.full)
            buttonStyle.width = '100%'

        if(props.fullRound){
            buttonStyle.width = 50
            buttonStyle.height = 50
            buttonStyle.borderRadius = 50
        }


        if( props.style ){
            buttonStyle = {
                ...buttonStyle,
                ...props.style
            }
        }

    let onPressHandler =  ()=>{}

    if( props.onPressHandler ){

        onPressHandler = props.onPressHandler
        
        return ( 
            <TouchableOpacity style={buttonStyle} onPress={ ()=> onPressHandler() }>
                {props.children}
            </TouchableOpacity>
        )
    }

    return ( <TouchableOpacity style={ buttonStyle }>
                {props.children}
            </TouchableOpacity> )
}


export default index