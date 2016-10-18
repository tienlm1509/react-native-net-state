# react-native-net-state

#### This package is now deprecated. [Networking](https://facebook.github.io/react-native/docs/network.html) should be used instead


### Example

```js
import React, {Component, PropTypes} from 'react';
import NetState from 'react-native-net-state';

class Run extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <NetState message="No internet access"/>
      </View>
    );
  }
});

module.exports = Run;
```

### Installation

```npm install react-native-net-state --save```