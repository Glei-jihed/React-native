import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

class LocationComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                this.setState({ latitude, longitude, error: null });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    render() {
        const { latitude, longitude, error } = this.state;

        return (
            <View style={styles.container}>
                {error ? (
                    <Text style={styles.errorText}>Error: {error}</Text>
                ) : (
                    <Text style={styles.locationText}>
                        Latitude: {latitude}, Longitude: {longitude}
                    </Text>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    locationText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});

export default LocationComponent;
