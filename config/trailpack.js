/**
 * Trailpack Configuration
 *
 * @see {@link http://trailsjs.io/doc/trailpack/config
 */
module.exports = {

  lifecycle: {
    configure: {
      listen: [ 'trailpack:core:configured' ]
    }
  }
}
