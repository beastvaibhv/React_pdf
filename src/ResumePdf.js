import ReactPDF, { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: '8px',
    fontSize: '13pt',
    width: '100%',
    height: '100%',
    fontFamily:'Times-Roman',
    
  },
  Header: {
    fontSize: '36pt',
    fontWeight: '1000',
    fontFamily:'Times-Bold',
  },
  headingsection: {
    marginBottom: '5px',
    textAlign: 'center'
  },
  sectionTitle: {
    fontWeight: '1000',
    fontSize: '18pt',
    marginBottom: '2px',
    fontFamily:'Times-Bold',
  },
  flex:{

  },
  titles:{
     fontWeight:"heavy",
     fontFamily:'Times-Bold',
  },
  text: {
    marginBottom:"5px"
  },
  linkItem: {
    marginBottom: '5px',
  },
});

const ResumePdf = () => {
  return (
    <div className='className ="w-5/12 lg:w-60% xl:w-60% shadow-md border-2 border-black p-2 m-2 font-serif"'>
    <PDFViewer width ={580} height = {800}>
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Name Section */}
        <View style={styles.headingsection}>
          <Text style={styles.Header}>John Doe</Text>
          <Text>+91 912XXXXXXX Dehradun, India</Text>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{ flex: 1 }}>
            <Text>Email</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Github</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>LinkedIn</Text>
          </View>
        </View>
        </View>

        {/* About Section */}
        <View >
          <Text style={styles.sectionTitle}>About</Text>
          <Text style = {styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem quo laudantium eos atque cupiditate iusto pariatur libero, quod, saepe error voluptas a? Sunt alias dicta magnam nam modi tempore deserunt dolor ratione reiciendis enim, voluptates aliquam dolorum, ducimus autem distinctio expedita, tenetur quaerat unde in odio temporibus! Repellendus, minima!</Text>
          
        </View>

        {/* Experience Section*/}
        < View>
          <Text style={styles.sectionTitle}>Experience</Text>

          <Text style ={styles.titles}>Frontend Developer</Text><Text></Text>
          <Text></Text> <Text></Text>
          <Text></Text>
          <Text style ={styles.titles}>Research Intern</Text> <Text></Text>
          <Text></Text> <Text></Text>
          <Text></Text>
          <Text style={styles.linkItem}></Text>
        </View>

        {/* Project Section */}
        <View >
          <Text style={styles.sectionTitle}>Projects</Text>
          <Text style={styles.titles}>Project 1</Text>
          <Text>Technology Used</Text>
          <Text></Text>
          <Text style={styles.titles}>Project 2</Text>
          <Text>Technology Used</Text>
          <Text></Text>
        </View>

        {/* Education Section */}
        <View >
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style ={styles.titles}>XYZ college</Text><Text></Text>
          <Text style ={styles.titles}>ABC School</Text><Text></Text>
        </View>

        {/* Awards Section */}
        <View >
          <Text style={styles.sectionTitle}>Awards and Achievements</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
      </Page>
    </Document>
    </PDFViewer>
    </div>
  );
};
export default ResumePdf