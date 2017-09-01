/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import * as firebaseSDK from 'firebase';

const {height: WINDOW_HEIGHT, width: WINDOW_WIDTH} = Dimensions.get('window');
//height: 667, width: 375

const sampleData = [
    {
        title: 'Red Skater Dress',
        size: 'S',
        imgSrc: "https://cdn.lulus.com/images/product/xlarge/2136492_394102.jpg",
        retailer: 'Lulu\'s'
    },
    {
        title: 'Low Back Dress',
        size: 'M',
        imgSrc: "https://cdn.tobi.com/product_images/md/1/black-come-together-swing-dress.jpg",
        retailer: 'Urban Outfitters'
    },
    {
        title: 'Cobalt Blue Shift Dress',
        size: 'S',
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0u0DuAkqMHnLBBYng48Pktw1LL3rFnKt9tlvawhFFZhYZUQOYyQ",
        retailer: 'ASOS'
    },
    {
        title: 'Black Weird Dress',
        size: 'L',
        imgSrc: "https://www.express.com/content/dam/express/2017/projects/digital/web/category-pages/07-july/0731-t18452-dresses-nav/mini-dresses-nav.jpg",
        retailer: 'Express'
    },
    {
        title: 'Red Skater Dress',
        size: 'S',
        imgSrc: "https://cdn.lulus.com/images/product/xlarge/2136492_394102.jpg",
        retailer: 'Lulu\'s'
    },
    {
        title: 'Low Back Dress',
        size: 'M',
        imgSrc: "https://cdn.tobi.com/product_images/md/1/black-come-together-swing-dress.jpg",
        retailer: 'Urban Outfitters'
    },
    {
        title: 'Cobalt Blue Shift Dress',
        size: 'S',
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0u0DuAkqMHnLBBYng48Pktw1LL3rFnKt9tlvawhFFZhYZUQOYyQ",
        retailer: 'ASOS'
    },
    {
        title: 'Black Weird Dress',
        size: 'L',
        imgSrc: "https://www.express.com/content/dam/express/2017/projects/digital/web/category-pages/07-july/0731-t18452-dresses-nav/mini-dresses-nav.jpg",
        retailer: 'Express'
    }
]

var config = {
    apiKey: "AIzaSyDKywtXKYLo2LDm-0hHrpvdZpts2OZCirA",
    authDomain: "formal-exchange.firebaseapp.com",
    databaseURL: "https://formal-exchange.firebaseio.com",
    projectId: "formal-exchange",
    storageBucket: "formal-exchange.appspot.com",
    messagingSenderId: "223003278853"
}
const firebase = firebaseSDK.initializeApp(config)
const db = firebase.database();

const logUserOut = () => {
    console.log('logging out');
}

// --------------------LOGIN--------------------------
class Login extends Component {
    static navigationOptions = {
        drawerLabel: 'Login',
        title: 'Login'
    }
    render() {
        return (<View style={styles.loginContainer}>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Text style={{fontSize: 50}}>OPEN</Text>
            </TouchableOpacity>
        </View>
    );
}
}


// --------------------LOGOUT--------------------------
class Logout extends Component {
    static navigationOptions = {
        drawerLabel: 'Logout',
    }
    render() {
        return (<View style={styles.container}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Text style={{fontSize: 50}}>OPEN</Text>
            </TouchableOpacity>
        </View>
    );
}
}

// --------------------BROWSE--------------------------
class Browse extends Component {
    static navigationOptions = {
        drawerLabel: 'Browse'
    }
    constructor() {
        super();
        this.state = {
            loaded: false
        }
    }
    componentDidMount() {
        console.log('getting stuff from database');
    }
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.flexLeft}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                        <Text>Menu</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexCenter}><Text style={{fontFamily: 'ralewayBold'}}>BROWSE</Text></View>
                <View style={styles.flexRight}><Text>account</Text></View>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer} removeClippedSubviews={false}>
                <View style={styles.itemsContainer}>
                    {sampleData.map((item) => (<View style={styles.itemBox}>
                        <Image style={styles.itemImage} source={{uri: item.imgSrc}}/>
                        <Text>{item.title}</Text>
                        <Text>{item.size}</Text>
                        <Text>{item.retailer}</Text>
                    </View>))}


                </View>
            </ScrollView>
        </View>
    );
}
}

// --------------------ACCOUNT--------------------------
class Account extends Component {
    static navigationOptions = {
        drawerLabel: 'My Account',
    }
    render() {
        return (<View style={styles.container}>
            <Text>Account</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Text style={{fontSize: 50}}>OPEN</Text>
            </TouchableOpacity>
        </View>
    );
}
}

// --------------------UPLOAD--------------------------
class Upload extends Component {
    static navigationOptions = {
        drawerLabel: 'Upload',
    }
    render() {
        return (<View style={styles.container}>
            <Text>Upload</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Text style={{fontSize: 50}}>OPEN</Text>
            </TouchableOpacity>
        </View>
    );
}
}

const CustomDrawerContentComponent = (props) => {
  return (<View style={styles.drawerContainer}>
    <DrawerItems {...props} onItemPress={(route) => {
            if (route.route.key === 'Logout') {
                logUserOut();
            }
            props.navigation.navigate(route.route.key);
        }}/>
  </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        flexDirection: 'column',
    },
    topBar: {
        flexDirection: 'row',
        flex: 0.1,
        marginTop: 10,
        height: 50,
        width: WINDOW_WIDTH,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contentContainer: {
        flexDirection: 'column',
        width: WINDOW_WIDTH,
        alignItems: 'center',
    },
    flexLeft: {
        flex: 1,
        alignItems: 'center',
        alignItems: 'flex-start'
    },
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    box1: {
        backgroundColor: '#78bbcf',
        height: 200,
        width: 100
    },
    box2: {
        backgroundColor: '#cec1b6',
        height: 200,
        width: 100
    },
    box3: {
        backgroundColor: '#c4adc9',
        height: 200,
        width: 300
    },
    itemRow: {
        width: WINDOW_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemImage: {
        width: 150,
        height: 266.8,
        borderWidth: 1,
        borderColor: "#000000",
        marginBottom: 2
    },
    itemBox: {
        width: (WINDOW_WIDTH - 10)/2,
        alignItems: 'center',
        marginBottom: 10
    },
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 5,
        paddingRight: 5
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    drawerContainer: {
            flex: 1,
            backgroundColor: '#FFFFFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const formalexchange = DrawerNavigator({
    Browse: {
        screen: Browse
    },
    Home: {
        screen: Login,
    },
    Upload: {
        screen: Upload
    },
    Account: {
        screen: Account
    },
    Logout: {
        screen: Logout
    }
    },
    {
        contentOptions: {
            activeTintColor: '#78bbcf',
            style: {
                marginVertical: 0,
            },
            onItemPress: function(route) {
                console.log('hey');
            }
        },
        drawerWidth: 200,
        contentComponent: CustomDrawerContentComponent
    }
);



export default formalexchange;

AppRegistry.registerComponent('formalexchange', () => formalexchange);
