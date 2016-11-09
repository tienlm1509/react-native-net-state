# react-native-net-state

![](https://raw.githubusercontent.com/tienlm1509/react-native-net-state/master/media/screen.png)

### Setting

#### Android
```
To request network info, you need to add the following line to your app's AndroidManifest.xml:

<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

Asynchronously determine if the device is connected and details about that connection.
```

### Example

```js
import React, {Component, PropTypes} from 'react';
import NetState from 'react-native-net-state';

class Run extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NetState message="No internet access"/>
      </View>
    );
  }
});

module.exports = Run;
```

### Installation

```npm install react-native-net-state --save```

### Props
- `message` you can customize message
- `style` you can customize styles box
- `styleText` you can customize styles message