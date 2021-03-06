import React from 'react';
import {View, Image, TouchableOpacity, Text, Linking} from 'react-native';
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import styles from './style';

import logoImg from '../../assets/logo.png';

export default function Detail() {
    const route = useRoute();

    const incident = route.params.incident;
    const navigation = useNavigation();
    const message = `Olá, ${incident.name}, estou entrando em contato, pois, gostaria de ajudar no caso. "${incident.tittle}", com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}.`;

    function navigationBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.tittle}`,
            recipients: [incident.email],
            body: message
        })
    }

    function sendWhats() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>

                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#e02041">

                    </Feather>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city} /{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.tittle}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
            </View>
            
            <View style={styles.contactionBox}>
                <Text style={styles.heroTittle}>Salve o dia</Text>
                <Text style={styles.heroTittle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhats}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
