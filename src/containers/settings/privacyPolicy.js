import React, { useCallback } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Style Sheet
import styles from './styles';

const PrivacyPolicy = ({ navigation }) => {

    return(
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    centerComponent={{
                        text: "Privacy Policy",
                        style: {
                            color: "#34383D",
                            fontWeight: '600', 
                            fontSize: 20, 
                            paddingTop: 20,
                        },
                    }}
                    leftComponent={
                        <Icon
                            name="arrow-left"
                            type="feather"
                            color="#34383D80"
                            size={25}
                            iconStyle={{
                            paddingTop: 20,
                            paddingLeft: 10,
                            paddingBottom: 10,
                            }}
                            onPress={() => navigation.goBack()}
                        />
                    }
                    containerStyle={{
                        backgroundColor: "#fff",
                        justifyContent: "space-around",
                        borderBottomWidth: 0,
                    }}
                />

                {/* Privacy Policy Text */}
                <ScrollView>
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#34383D', paddingLeft: 15, marginTop: 20}}>Privacy Policy for Alula</Text>
                    
                    {/* Intro to Policy */}
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>
                    At Alula, accessible from alulapm.com or it's landlord/tenant apps, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Alula and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website/apps with regards to the information that they shared and/or collect in Alula. This policy is not applicable to any information collected offline or via channels other than this website/apps.
                    </Text>

                    {/* Consent */}
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#34383D', paddingLeft: 15, marginTop: 30}}>Consent</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</Text>

                    {/* Information we collect */}
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#34383D', paddingLeft: 15, marginTop: 30}}>Information we collect</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</Text>

                    {/* How we use your information */}
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#34383D', paddingLeft: 15, marginTop: 30}}>How we use your information</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>We use the information we collect in various ways, including to:</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>- Provide, operate, and maintain our website</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>- Improve, personalize, and expand our website</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>- Understand and analyze how you use our website</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>- Develop new products, services, features, and functionality</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>- Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>- Send you emails</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>- Find and prevent fraud</Text>

                    {/* Log Files */}
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#34383D', paddingLeft: 15, marginTop: 30}}>Log Files</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>Alula follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</Text>

                    {/* Our Advertising Partners */}
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#34383D', paddingLeft: 15, marginTop: 30}}>Our Advertising Partners</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>- Google: https://policies.google.com/technologies/ads</Text>
                    
                    {/* Advertising Partners Privacy Policies */}
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#34383D', paddingLeft: 15, marginTop: 30}}>Advertising Partners Privacy Policies</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>You may consult this list to find the Privacy Policy for each of the advertising partners of Alula.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Alula, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>Note that Alula has no access to or control over these cookies that are used by third-party advertisers.</Text>

                    {/* Third Party Privacy Policies */}
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#34383D', paddingLeft: 15, marginTop: 30}}>Third Party Privacy Policies</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>Alula's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</Text>

                    {/* CCPA Privacy Rights (Do Not Sell My Personal Information) */}
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#34383D', paddingLeft: 15, marginTop: 30}}>CCPA Privacy Rights (Do Not Sell My Personal Information)</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>Under the CCPA, among other rights, California consumers have the right to:</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>Request that a business delete any personal data about the consumer that a business has collected.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Text>

                    {/* GDPR Data Protection Rights */}
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#34383D', paddingLeft: 15, marginTop: 30}}>GDPR Data Protection Rights</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Text>
                
                    {/* Children's Information */}
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#34383D', paddingLeft: 15, marginTop: 30}}>Children's Information</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginTop: 20}}>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</Text>
                    <Text style={{fontWeight: '500', color: '#34383D', paddingHorizontal: 15, marginVertical: 20}}>Alula does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</Text>
                </ScrollView>
            </View>
        </>
    );
}

export default PrivacyPolicy;