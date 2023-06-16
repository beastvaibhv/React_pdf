import ReactPDF, { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: '40px',
    fontSize: '12pt',
    width: '100%',
    height: '100%',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  linkItem: {
    marginBottom: '5px',
  },
});

const ResumePdf = () => {
  return (
    <PDFViewer>
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Name Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>John Doe</Text>
          
        </View>

        {/* Contact and Address Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem quo laudantium eos atque cupiditate iusto pariatur libero, quod, saepe error voluptas a? Sunt alias dicta magnam nam modi tempore deserunt dolor ratione reiciendis enim, voluptates aliquam dolorum, ducimus autem distinctio expedita, tenetur quaerat unde in odio temporibus! Repellendus, minima!</Text>
          
        </View>

        {/* Email Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <View> <Text>ABC Company</Text></View>
          <View><Text>XYZ Company</Text></View>
          <Text style={styles.linkItem}>Email: john.doe@example.com</Text>
        </View>

        {/* GitHub Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>GitHub</Text>
          <Text style={styles.linkItem}>GitHub: github.com/johndoe</Text>
        </View>

        {/* LinkedIn Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LinkedIn</Text>
          <Text style={styles.linkItem}>LinkedIn: linkedin.com/in/johndoe</Text>
        </View>

        {/* Additional Information Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Information</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
      </Page>
    </Document>
    </PDFViewer>
  );
};
export default ResumePdf