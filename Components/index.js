import React from 'react'
import { TouchableOpacity } from 'react-native'
import Theme from '../../../assets/styles'

function index(props){
    
    const { primaryColor, positiveColor, negativeColor, disabledColor} = Theme
    const { w1, w2, w3, w4, w45, w5, w6, w7, w8, w9, w10 } = props
    const { r3, r6, r9, r12, r15, r18, r21, r24, r27,r30 } = props
    const { mb10, mb20, mb30, mb40, mb50, mb60, mb70, mb80, mb90, mb100 } = props
    const { h10, h20, h30, h40, h50, h60, h70, h80, h90, h100 } = props
    const { flex1 } = props
    const { jc } = props

    let buttonStyle = {}


    if( flex1 ){
      buttonStyle.flex = 1
    }

    if( jc ){
      buttonStyle.justifyContent = 'center'
    }

    if( w1 )
      buttonStyle.width = '10%'
    
    if( w2 )
      buttonStyle.width = '20%'

    if( w3 )
      buttonStyle.width = '30%'

    if( w4 )
      buttonStyle.width = '40%'

    if( w45 )
      buttonStyle.width = '45%'

    if( w5 )
      buttonStyle.width = '50%'

    if( w6 )
      buttonStyle.width = '60%'

    if( w7 )
      buttonStyle.width = '70%'

    if( w8 )
      buttonStyle.width = '80%'

    if( w9 )
      buttonStyle.width = '90%'

    if( w10 )
      buttonStyle.width = '100%'

    


    
    if(r3 )
      buttonStyle.borderRadius = 3
    
    if(r6 )
      buttonStyle.borderRadius = 6

    if(r9 )
      buttonStyle.borderRadius = 9

    if(r12 )
      buttonStyle.borderRadius = 12

    if(r15 )
      buttonStyle.borderRadius = 15

    if(r18 )
      buttonStyle.borderRadius = 18

    if(r21 )
      buttonStyle.borderRadius = 21

    if(r24 )
      buttonStyle.borderRadius = 24

    if(r27 )
      buttonStyle.borderRadius = 27

    if(r30 )
      buttonStyle.borderRadius = 30


    
    
    if(mb10)
      buttonStyle.marginBottom = 10
    
    if(mb20)
      buttonStyle.marginBottom = 20

    if(mb30)
      buttonStyle.marginBottom = 30

    if(mb40 )
      buttonStyle.marginBottom = 40

    if(mb50 )
      buttonStyle.marginBottom = 50

    if(mb60 )
      buttonStyle.marginBottom = 60

    if(mb70 )
      buttonStyle.marginBottom = 70

    if(mb80 )
      buttonStyle.marginBottom = 80

    if(mb90 )
      buttonStyle.marginBottom = 90

    if(mb100 )
      buttonStyle.marginBottom = 100

      



    if(h10)
      buttonStyle.height = 10
    
    if(h20)
      buttonStyle.height = 20

    if(h30)
      buttonStyle.height = 30

    if(h40 )
      buttonStyle.height = 40

    if(h50 )
      buttonStyle.height = 50

    if(h60 )
      buttonStyle.height = 60

    if(h70 )
      buttonStyle.height = 70

    if(h80 )
      buttonStyle.height = 80

    if(h90 )
      buttonStyle.height = 90

    if(h100 )
      buttonStyle.height = 100


    if( props.fullCenter ){
      buttonStyle.justifyContent = 'center'
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