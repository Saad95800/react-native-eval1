import {TouchableOpacity, View, Text} from 'react-native'
import { s } from './TabBottomMenu.style.js'

export default function TabBottomMenu({onPress}) {

  return (
    <View style={s.container}>
        <TouchableOpacity onPress={()=> onPress()}>
            <Text>Add Article</Text>
        </TouchableOpacity>
    </View>

  )
}
