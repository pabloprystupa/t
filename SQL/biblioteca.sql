-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-07-2023 a las 11:56:03
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentos`
--

CREATE TABLE `documentos` (
  `codigo` int(11) NOT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `tematica` varchar(50) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `descripcion` varchar(250) DEFAULT NULL,
  `descargas` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `documentos`
--

INSERT INTO `documentos` (`codigo`, `titulo`, `tematica`, `tipo`, `descripcion`, `descargas`) VALUES
(1, 'Caída libre', 'Física', 'Ensayo', 'Desarrollo de la caida libre de cuerpos en el vaacío', 5),
(2, 'Tiro oblico', 'Física', 'Trabajo Práctico', 'Ejercicios resueltos', 2),
(3, 'Movimiento Rectilineo Uniformemente Variado', 'Física', 'Trabajo Práctico', 'Ejercicios resueltos', 2),
(4, 'Movimiento Rectilineo Uniformemente Variado', 'Física', 'Trabajo Práctico', 'Ejercicios resueltos', 0),
(5, 'Electrólis', 'Química', 'Monografía', 'Descripción del proceso de electrólisis del agua', 1),
(6, 'Egipto', 'Historia', 'Monografía', 'Historia del antiguo Egipto entre los periodos tal y tal', 0),
(7, 'la célula', 'Biología', 'Ensayo', 'la celula', 0),
(8, 'Fotosíntesis ', 'Biología', 'Monografía', 'Monografía sobre la fotosíntesis', 0),
(9, 'Integrales múltiples', 'Matemática', 'Ejercicios resueltos', 'Ejercicios de integración', 0),
(10, 'Derivadas parciales', 'Matemática', 'Trabajo Práctico', 'resolución de ejercicios de derivadas de funciones de múltiples variables\n', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `documentos`
--
ALTER TABLE `documentos`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `documentos`
--
ALTER TABLE `documentos`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
