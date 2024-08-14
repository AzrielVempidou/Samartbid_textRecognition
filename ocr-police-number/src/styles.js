import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  navbar: {
    backgroundColor: '#f97316',
    paddingVertical: 15,
    alignItems: 'center',
  },
  navbarText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  uploadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  displayContainer: {
    padding: 20,
    alignItems: 'center',
  },
  displayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  displayText: {
    fontSize: 16,
    color: '#666666',
    marginTop: 10,
  },
});
