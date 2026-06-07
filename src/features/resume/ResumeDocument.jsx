import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import { formatResumeDateRange } from './formatResumeDate.js'

const styles = StyleSheet.create({
  page: {
    padding: 34,
    color: '#111827',
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
    fontSize: 9,
    lineHeight: 1.45,
  },
  header: {
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#d9deea',
  },
  name: {
    fontSize: 25,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.1,
  },
  role: {
    marginTop: 5,
    color: '#4546c7',
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
  },
  summary: {
    maxWidth: 470,
    marginTop: 10,
    color: '#4b5563',
    fontSize: 9.5,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
    marginTop: 20,
  },
  sidebar: {
    width: '31%',
  },
  main: {
    width: '69%',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 8,
    paddingBottom: 4,
    color: '#4546c7',
    borderBottomWidth: 1,
    borderBottomColor: '#d9deea',
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
  },
  contactItem: {
    marginBottom: 4,
    color: '#4b5563',
  },
  contactLink: {
    marginBottom: 4,
    color: '#4546c7',
    textDecoration: 'none',
  },
  group: {
    marginBottom: 10,
  },
  groupTitle: {
    marginBottom: 4,
    fontFamily: 'Helvetica-Bold',
  },
  skill: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
    marginBottom: 3,
  },
  skillLevel: {
    color: '#6b7280',
    fontSize: 7.5,
  },
  timelineItem: {
    marginBottom: 13,
  },
  itemHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  itemTitle: {
    maxWidth: 220,
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
  dates: {
    color: '#4546c7',
    fontSize: 7.5,
  },
  organization: {
    marginTop: 2,
    color: '#4b5563',
    fontFamily: 'Helvetica-Bold',
  },
  itemSummary: {
    marginTop: 5,
    color: '#374151',
  },
  bullet: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginTop: 3,
    paddingLeft: 5,
  },
  bulletMarker: {
    color: '#0f9f8f',
  },
  language: {
    marginBottom: 4,
    color: '#374151',
  },
  notice: {
    position: 'absolute',
    right: 34,
    bottom: 18,
    left: 34,
    color: '#6b7280',
    fontSize: 6.5,
    textAlign: 'center',
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

function PdfTimeline({ currentLabel, items, locale, showHighlights = false }) {
  return items.map((item) => {
    const title = item.title ?? item.qualification
    const organization = item.organization ?? item.institution

    return (
      <View key={item.id} style={styles.timelineItem} wrap={false}>
        <View style={styles.itemHeading}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.dates}>
            {formatResumeDateRange(item, locale, currentLabel)}
          </Text>
        </View>
        <Text style={styles.organization}>
          {organization}
          {item.location ? ` - ${item.location}` : ''}
        </Text>
        <Text style={styles.itemSummary}>{item.summary}</Text>
        {showHighlights
          ? item.highlights.map((highlight) => (
              <View key={highlight} style={styles.bullet}>
                <Text style={styles.bulletMarker}>-</Text>
                <Text>{highlight}</Text>
              </View>
            ))
          : null}
      </View>
    )
  })
}

function ResumeDocument({
  contact,
  education,
  experience,
  locale,
  profile,
  resume,
  skills,
}) {
  return (
    <Document
      title={`${profile.name} - ${resume.title}`}
      author={profile.name}
      subject={resume.headline}
      language={locale}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.role}>{resume.headline}</Text>
          <Text style={styles.summary}>{resume.summary}</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.sidebar}>
            <PdfSection title={resume.sections.contact}>
              <Link src={`mailto:${contact.email}`} style={styles.contactLink}>
                {contact.email}
              </Link>
              <Text style={styles.contactItem}>{profile.location}</Text>
              <Text style={styles.contactItem}>{profile.availability}</Text>
            </PdfSection>

            <PdfSection title={resume.sections.skills}>
              {skills.map((group) => (
                <View key={group.id} style={styles.group} wrap={false}>
                  <Text style={styles.groupTitle}>{group.title}</Text>
                  {group.skills.map((skill) => (
                    <View key={skill.id} style={styles.skill}>
                      <Text>{skill.label}</Text>
                      <Text style={styles.skillLevel}>{skill.levelLabel}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </PdfSection>

            <PdfSection title={resume.sections.languages}>
              {resume.languages.map((language) => (
                <Text key={language} style={styles.language}>
                  {language}
                </Text>
              ))}
            </PdfSection>
          </View>

          <View style={styles.main}>
            <PdfSection title={resume.sections.experience}>
              <PdfTimeline
                currentLabel={resume.currentLabel}
                items={experience}
                locale={locale}
                showHighlights
              />
            </PdfSection>

            <PdfSection title={resume.sections.education}>
              <PdfTimeline
                currentLabel={resume.currentLabel}
                items={education}
                locale={locale}
              />
            </PdfSection>
          </View>
        </View>

        <Text style={styles.notice} fixed>
          {resume.fictitiousNotice}
        </Text>
      </Page>
    </Document>
  )
}

export default ResumeDocument
