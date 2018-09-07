/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var Arc = require('./Arc');
var GameObjectFactory = require('../../GameObjectFactory');

/**
 * Creates a new Arc Shape Game Object and adds it to the Scene.
 *
 * Note: This method will only be available if the Arc Game Object has been built into Phaser.
 *
 * @method Phaser.GameObjects.GameObjectFactory#arc
 * @since 3.13.0
 *
 * @param {number} [x=0] - The horizontal position of this Game Object in the world.
 * @param {number} [y=0] - The vertical position of this Game Object in the world.
 * @param {number} [radius=128] - The radius of the arc.
 * @param {number} [startAngle=0] - The start angle of the arc, in degrees.
 * @param {number} [endAngle=360] - The end angle of the arc, in degrees.
 * @param {boolean} [anticlockwise=false] - The winding order of the start and end angles.
 * @param {number} [fillColor] - The color the arc will be filled with, i.e. 0xff0000 for red.
 * @param {number} [fillAlpha] - The alpha the arc will be filled with. You can also set the alpha of the overall Shape using its `alpha` property.
 *
 * @return {Phaser.GameObjects.Arc} The Game Object that was created.
 */
GameObjectFactory.register('arc', function (x, y, radius, startAngle, endAngle, anticlockwise, fillColor, fillAlpha)
{
    return this.displayList.add(new Arc(this.scene, x, y, radius, startAngle, endAngle, anticlockwise, fillColor, fillAlpha));
});

/**
 * Creates a new Circle Shape Game Object and adds it to the Scene.
 * 
 * A Circle is an Arc with no defined start and end angle, making it render as a complete circle.
 *
 * Note: This method will only be available if the Arc Game Object has been built into Phaser.
 *
 * @method Phaser.GameObjects.GameObjectFactory#circle
 * @since 3.13.0
 *
 * @param {number} [x=0] - The horizontal position of this Game Object in the world.
 * @param {number} [y=0] - The vertical position of this Game Object in the world.
 * @param {number} [radius=128] - The radius of the circle.
 * @param {number} [fillColor=0xffffff] - The color the circle will be filled with, i.e. 0xff0000 for red.
 * @param {number} [fillAlpha=1] - The alpha the circle will be filled with. You can also set the alpha of the overall Shape using its `alpha` property.
 *
 * @return {Phaser.GameObjects.Arc} The Game Object that was created.
 */
GameObjectFactory.register('circle', function (x, y, radius, fillColor, fillAlpha)
{
    return this.displayList.add(new Arc(this.scene, x, y, radius, 0, 360, false, fillColor, fillAlpha));
});
