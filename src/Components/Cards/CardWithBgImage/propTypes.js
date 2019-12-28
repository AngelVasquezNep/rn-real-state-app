import PropTypes from 'prop-types'

const propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      uri: PropTypes.string
    })
  ]),
  label: PropTypes.string,
  sizeLabel: PropTypes.object,
  sizeIcon: PropTypes.number,
  iconName: PropTypes.string
}

export default propTypes
