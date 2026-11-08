import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'

// Les mots ne doivent jamais être coupés par une césure automatique.
Font.registerHyphenationCallback((word) => [word])

const colors = Object.freeze({
  text: '#111827',
  body: '#374151',
  muted: '#6b7280',
  accent: '#4546c7',
  accentSoft: '#0f9f8f',
  rule: '#d9deea',
})

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 28,
    paddingHorizontal: 34,
    color: colors.text,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
    fontSize: 8.5,
    lineHeight: 1.4,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 18,
  },
  identity: {
    width: 429,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.1,
  },
  headline: {
    marginTop: 4,
    color: colors.accent,
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
  },
  location: {
    marginTop: 2,
    color: colors.muted,
  },
  contacts: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    marginBottom: 2,
  },
  contactLabel: {
    width: 50,
    color: colors.muted,
  },
  contactLink: {
    color: colors.accent,
    textDecoration: 'none',
  },
  photoFrame: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
  },
  photo: {
    width: 80,
    height: 80,
    objectFit: 'cover',
  },
  summary: {
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.rule,
    color: colors.body,
    fontSize: 9,
    lineHeight: 1.5,
  },
  section: {
    marginTop: 11,
  },
  sectionTitle: {
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.rule,
    color: colors.accent,
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
  },
  columns: {
    display: 'flex',
    flexDirection: 'row',
    gap: 14,
  },
  skillColumn: {
    flexGrow: 1,
    flexBasis: 0,
  },
  skillTitle: {
    marginBottom: 2,
    fontFamily: 'Helvetica-Bold',
  },
  skillItem: {
    color: colors.body,
  },
  entry: {
    marginBottom: 6,
  },
  entryHeading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 10,
  },
  entryTitleWrap: {
    flexGrow: 1,
    flexShrink: 1,
  },
  entryTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
  },
  entryMeta: {
    flexShrink: 0,
    color: colors.accent,
    fontSize: 7.5,
    fontFamily: 'Helvetica',
  },
  stack: {
    flexShrink: 0,
    color: colors.accentSoft,
    fontSize: 7.5,
  },
  organization: {
    color: colors.muted,
    fontFamily: 'Helvetica-Bold',
  },
  entryText: {
    marginTop: 1,
    color: colors.body,
  },
  educationGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 18,
  },
  educationEntry: {
    width: '47.5%',
    marginBottom: 5,
  },
})

function PdfSection({ children, title }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  )
}

function PdfExperience({ items }) {
  return items.map((item) => (
    <View key={item.id} style={styles.entry} wrap={false}>
      <View style={styles.entryHeading}>
        <View style={styles.entryTitleWrap}>
          <Text style={styles.entryTitle}>{item.title}</Text>
        </View>
        <Text style={styles.entryMeta}>{item.dates}</Text>
      </View>
      {item.organization ? (
        <Text style={styles.organization}>{item.organization}</Text>
      ) : null}
      <Text style={styles.entryText}>{item.summary}</Text>
    </View>
  ))
}

function ResumeDocument({ model }) {
  return (
    <Document
      title={model.documentTitle}
      author={model.name}
      subject={model.headline}
      language={model.locale}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.identity}>
            <Text style={styles.name}>{model.name}</Text>
            <Text style={styles.headline}>{model.headline}</Text>
            <Text style={styles.location}>{model.location}</Text>
            <View style={styles.contacts}>
              {model.contacts.map((contact) => (
                <View key={contact.id} style={styles.contactItem}>
                  <Text style={styles.contactLabel}>{contact.label}</Text>
                  <Link src={contact.href} style={styles.contactLink}>
                    {contact.value}
                  </Link>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.photoFrame}>
            <Image src={model.photo.src} style={styles.photo} />
          </View>
        </View>

        <Text style={styles.summary}>{model.summary}</Text>

        <PdfSection title={model.sections.skills}>
          <View style={styles.columns}>
            {model.skillGroups.map((group) => (
              <View key={group.id} style={styles.skillColumn}>
                <Text style={styles.skillTitle}>{group.title}</Text>
                {group.items.map((item) => (
                  <Text key={item} style={styles.skillItem}>
                    {item}
                  </Text>
                ))}
              </View>
            ))}
            <View style={styles.skillColumn}>
              <Text style={styles.skillTitle}>{model.sections.languages}</Text>
              {model.languages.map((language) => (
                <Text key={language} style={styles.skillItem}>
                  {language}
                </Text>
              ))}
            </View>
          </View>
        </PdfSection>

        <PdfSection title={model.sections.projects}>
          {model.projects.map((project) => (
            <View key={project.id} style={styles.entry} wrap={false}>
              <View style={styles.entryHeading}>
                <View style={styles.entryTitleWrap}>
                  <Text style={styles.entryTitle}>{project.title}</Text>
                </View>
                <Text style={styles.stack}>{project.stack}</Text>
              </View>
              <Text style={styles.entryText}>{project.description}</Text>
            </View>
          ))}
        </PdfSection>

        <PdfSection title={model.sections.experience}>
          <PdfExperience items={model.experience} />
        </PdfSection>

        <PdfSection title={model.sections.education}>
          <View style={styles.educationGrid}>
            {model.education.map((item) => (
              <View key={item.id} style={styles.educationEntry} wrap={false}>
                <Text style={styles.entryTitle}>{item.title}</Text>
                <Text style={styles.organization}>
                  {item.organization ? `${item.organization} · ` : ''}
                  <Text style={styles.entryMeta}>{item.dates}</Text>
                </Text>
              </View>
            ))}
          </View>
        </PdfSection>
      </Page>
    </Document>
  )
}

export default ResumeDocument
