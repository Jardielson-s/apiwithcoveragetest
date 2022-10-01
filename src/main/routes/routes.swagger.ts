/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *             - name
 *             - email
 *             - password
 *          properties:
 *              name:
 *                  type: string
 *                  description: User name
 *              email:
 *                  type: string
 *                  description: User email
 *              password:
 *                  type: string
 *                  description: User password
 *          example:
 *                  name: John Doe
 *                  email: JohnDoe@gmail.com
 *                  password: John*123456
 */

/**
 * @swagger
 * /health-check:
 *  get:
 *      summary: Return Server Status
 *      tags: [Server]
 *      responses:
 *          200:
 *              description: Status Server
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          example: HEALTH CHECK OK
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The User managing API
 */

/**
 * @swagger
 * /api/user:
 *  post:
 *      summary: Create User
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          201:
 *              description: The user was successfully created
 *              content:
 *                  application/json:
 *                      schemas:
 *                          $ref: '#/components/schemas/User'
 *          400:
 *              description: Bad Request
 *              content:
 *                  text/plan:
 *                      schema:
 *                          type: string
 *                          example: "User email already Exixts"
 *          500:
 *              description: Some server error
 */
