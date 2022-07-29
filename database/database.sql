-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 06, 2020 at 06:38 AM
-- Server version: 5.6.41-84.1
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appleonx_appleonx_onlineradios1`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_user`
--

CREATE TABLE `admin_user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_user`
--

INSERT INTO `admin_user` (`id`, `name`, `username`, `password`, `create_date`) VALUES
(1, 'Admin', 'admin@admin.com', '$2y$10$.fOPM2nQ0NdnoNpZcqDuGOnA9lfq7mRf1amLe9vabhO3XzeXV.bs6', '2018-09-28 10:42:41');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `country_id` int(11) NOT NULL,
  `country_name` varchar(100) DEFAULT NULL,
  `code` varchar(5) DEFAULT NULL,
  `flag_pic` varchar(900) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`country_id`, `country_name`, `code`, `flag_pic`) VALUES
(1, 'AFGHANISTAN', 'AF', 'af.png'),
(2, 'ALBANIA', 'AL', 'al.png'),
(3, 'ALGERIA', 'DZ', 'dz.png'),
(4, 'AMERICAN SAMOA', 'AS', 'as.png'),
(5, 'ANDORRA', 'AD', 'ad.png'),
(6, 'ANGOLA', 'AO', 'ao.png'),
(7, 'ANGUILLA', 'AI', 'ai.png'),
(8, 'ANTARCTICA', 'AQ', 'aq.png'),
(9, 'ANTIGUA AND BARBUDA', 'AG', 'ag.png'),
(10, 'ARGENTINA', 'AR', 'ar.png'),
(11, 'ARMENIA', 'AM', 'am.png'),
(12, 'ARUBA', 'AW', 'aw.png'),
(13, 'AUSTRALIA', 'AU', 'au.png'),
(14, 'AUSTRIA', 'AT', 'at.png'),
(15, 'AZERBAIJAN', 'AZ', 'az.png'),
(16, 'BAHAMAS', 'BS', 'bs.png'),
(17, 'BAHRAIN', 'BH', 'bh.png'),
(18, 'BANGLADESH', 'BD', 'bd.png'),
(19, 'BARBADOS', 'BB', 'bb.png'),
(20, 'BELARUS', 'BY', 'by.png'),
(21, 'BELGIUM', 'BE', 'be.png'),
(22, 'BELIZE', 'BZ', 'bz.png'),
(23, 'BENIN', 'BJ', 'bj.png'),
(24, 'BERMUDA', 'BM', 'bm.png'),
(25, 'BHUTAN', 'BT', 'bt.png'),
(26, 'BOLIVIA', 'BO', 'bo.png'),
(27, 'BOSNIA AND HERZEGOVINA', 'BA', 'ba.png'),
(28, 'BOTSWANA', 'BW', 'bw.png'),
(29, 'BOUVET ISLAND', 'BV', 'bv.png'),
(30, 'BRAZIL', 'BR', 'br.png'),
(31, 'BRITISH INDIAN OCEAN TERRITORY', 'IO', 'io.png'),
(32, 'BRUNEI DARUSSALAM', 'BN', 'bn.png'),
(33, 'BULGARIA', 'BG', 'bg.png'),
(34, 'BURKINA FASO', 'BF', 'bf.png'),
(35, 'BURUNDI', 'BI', 'bi.png'),
(36, 'CAMBODIA', 'KH', 'kh.png'),
(37, 'CAMEROON', 'CM', 'cm.png'),
(38, 'CANADA', 'CA', 'ca.png'),
(39, 'CAPE VERDE', 'CV', 'cv.png'),
(40, 'CAYMAN ISLANDS', 'KY', 'ky.png'),
(41, 'CENTRAL AFRICAN REPUBLIC', 'CF', 'cf.png'),
(42, 'CHAD', 'TD', 'td.png'),
(43, 'CHILE', 'CL', 'cl.png'),
(44, 'CHINA', 'CN', 'cn.png'),
(45, 'CHRISTMAS ISLAND', 'CX', 'cx.png'),
(46, 'COCOS (KEELING) ISLANDS', 'CC', 'cc.png'),
(47, 'COLOMBIA', 'CO', 'co.png'),
(48, 'COMOROS', 'KM', 'km.png'),
(49, 'CONGO', 'CG', 'cg.png'),
(50, 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', 'CD', 'cd.png'),
(51, 'COOK ISLANDS', 'CK', 'ck.png'),
(52, 'COSTA RICA', 'CR', 'cr.png'),
(53, 'COTE D IVOIRE', 'CI', 'ci.png'),
(54, 'CROATIA', 'HR', 'hr.png'),
(55, 'CUBA', 'CU', 'cu.png'),
(56, 'CYPRUS', 'CY', 'cy.png'),
(57, 'CZECH REPUBLIC', 'CZ', 'cz.png'),
(58, 'DENMARK', 'DK', 'dk.png'),
(59, 'DJIBOUTI', 'DJ', 'dj.png'),
(60, 'DOMINICA', 'DM', 'dm.png'),
(61, 'DOMINICAN REPUBLIC', 'DO', 'do.png'),
(62, 'EAST TIMOR', 'TP', 'tp.png'),
(63, 'ECUADOR', 'EC', 'ec.png'),
(64, 'EGYPT', 'EG', 'eg.png'),
(65, 'EL SALVADOR', 'SV', 'sv.png'),
(66, 'EQUATORIAL GUINEA', 'GQ', 'gq.png'),
(67, 'ERITREA', 'ER', 'er.png'),
(68, 'ESTONIA', 'EE', 'ee.png'),
(69, 'ETHIOPIA', 'ET', 'et.png'),
(70, 'FALKLAND ISLANDS (MALVINAS)', 'FK', 'fk.png'),
(71, 'FAROE ISLANDS', 'FO', 'fo.png'),
(72, 'FIJI', 'FJ', 'fj.png'),
(73, 'FINLAND', 'FI', 'fi.png'),
(74, 'FRANCE', 'FR', 'fr.png'),
(75, 'FRENCH GUIANA', 'GF', 'gf.png'),
(76, 'FRENCH POLYNESIA', 'PF', 'pf.png'),
(77, 'FRENCH SOUTHERN TERRITORIES', 'TF', 'tf.png'),
(78, 'GABON', 'GA', 'ga.png'),
(79, 'GAMBIA', 'GM', 'gm.png'),
(80, 'GEORGIA', 'GE', 'ge.png'),
(81, 'GERMANY', 'DE', 'de.png'),
(82, 'GHANA', 'GH', 'gh.png'),
(83, 'GIBRALTAR', 'GI', 'gi.png'),
(84, 'GREECE', 'GR', 'gr.png'),
(85, 'GREENLAND', 'GL', 'gl.png'),
(86, 'GRENADA', 'GD', 'gd.png'),
(87, 'GUADELOUPE', 'GP', 'gp.png'),
(88, 'GUAM', 'GU', 'gu.png'),
(89, 'GUATEMALA', 'GT', 'gt.png'),
(90, 'GUINEA', 'GN', 'gn.png'),
(91, 'GUINEA-BISSAU', 'GW', 'gw.png'),
(92, 'GUYANA', 'GY', 'gy.png'),
(93, 'HAITI', 'HT', 'ht.png'),
(94, 'HEARD ISLAND AND MCDONALD ISLANDS', 'HM', 'hm.png'),
(95, 'HOLY SEE (VATICAN CITY STATE)', 'VA', 'va.png'),
(96, 'HONDURAS', 'HN', 'hn.png'),
(97, 'HONG KONG', 'HK', 'hk.png'),
(98, 'HUNGARY', 'HU', 'hu.png'),
(99, 'ICELAND', 'IS', 'is.png'),
(100, 'INDIA', 'IN', 'in.png'),
(101, 'INDONESIA', 'ID', 'id.png'),
(102, 'IRAN, ISLAMIC REPUBLIC OF', 'IR', 'ir.png'),
(103, 'IRAQ', 'IQ', 'iq.png'),
(104, 'IRELAND', 'IE', 'ie.png'),
(105, 'ISRAEL', 'IL', 'il.png'),
(106, 'ITALY', 'IT', 'it.png'),
(107, 'JAMAICA', 'JM', 'jm.png'),
(108, 'JAPAN', 'JP', 'jp.png'),
(109, 'JORDAN', 'JO', 'jo.png'),
(110, 'KAZAKSTAN', 'KZ', 'kz.png'),
(111, 'KENYA', 'KE', 'ke.png'),
(112, 'KIRIBATI', 'KI', 'ki.png'),
(113, 'KOREA DEMOCRATIC PEOPLES REPUBLIC OF', 'KP', 'kp.png'),
(114, 'KOREA REPUBLIC OF', 'KR', 'kr.png'),
(115, 'KUWAIT', 'KW', 'kw.png'),
(116, 'KYRGYZSTAN', 'KG', 'kg.png'),
(117, 'LAO PEOPLES DEMOCRATIC REPUBLIC', 'LA', 'la.png'),
(118, 'LATVIA', 'LV', 'lv.png'),
(119, 'LEBANON', 'LB', 'lb.png'),
(120, 'LESOTHO', 'LS', 'ls.png'),
(121, 'LIBERIA', 'LR', 'lr.png'),
(122, 'LIBYAN ARAB JAMAHIRIYA', 'LY', 'ly.png'),
(123, 'LIECHTENSTEIN', 'LI', 'li.png'),
(124, 'LITHUANIA', 'LT', 'lt.png'),
(125, 'LUXEMBOURG', 'LU', 'lu.png'),
(126, 'MACAU', 'MO', 'mo.png'),
(127, 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', 'MK', 'mk.png'),
(128, 'MADAGASCAR', 'MG', 'mg.png'),
(129, 'MALAWI', 'MW', 'mw.png'),
(130, 'MALAYSIA', 'MY', 'my.png'),
(131, 'MALDIVES', 'MV', 'mv.png'),
(132, 'MALI', 'ML', 'ml.png'),
(133, 'MALTA', 'MT', 'mt.png'),
(134, 'MARSHALL ISLANDS', 'MH', 'mh.png'),
(135, 'MARTINIQUE', 'MQ', 'mq.png'),
(136, 'MAURITANIA', 'MR', 'mr.png'),
(137, 'MAURITIUS', 'MU', 'mu.png'),
(138, 'MAYOTTE', 'YT', 'yt.png'),
(139, 'MEXICO', 'MX', 'mx.png'),
(140, 'MICRONESIA, FEDERATED STATES OF', 'FM', 'fm.png'),
(141, 'MOLDOVA, REPUBLIC OF', 'MD', 'md.png'),
(142, 'MONACO', 'MC', 'mc.png'),
(143, 'MONGOLIA', 'MN', 'mn.png'),
(144, 'MONTSERRAT', 'MS', 'ms.png'),
(145, 'MOROCCO', 'MA', 'ma.png'),
(146, 'MOZAMBIQUE', 'MZ', 'mz.png'),
(147, 'MYANMAR', 'MM', 'mm.png'),
(148, 'NAMIBIA', 'NA', 'na.png'),
(149, 'NAURU', 'NR', 'nr.png'),
(150, 'NEPAL', 'NP', 'np.png'),
(151, 'NETHERLANDS', 'NL', 'nl.png'),
(152, 'NETHERLANDS ANTILLES', 'AN', 'an.png'),
(153, 'NEW CALEDONIA', 'NC', 'nc.png'),
(154, 'NEW ZEALAND', 'NZ', 'nz.png'),
(155, 'NICARAGUA', 'NI', 'ni.png'),
(156, 'NIGER', 'NE', 'ne.png'),
(157, 'NIGERIA', 'NG', 'ng.png'),
(158, 'NIUE', 'NU', 'nu.png'),
(159, 'NORFOLK ISLAND', 'NF', 'nf.png'),
(160, 'NORTHERN MARIANA ISLANDS', 'MP', 'mp.png'),
(161, 'NORWAY', 'NO', 'no.png'),
(162, 'OMAN', 'OM', 'om.png'),
(163, 'PAKISTAN', 'PK', 'pk.png'),
(164, 'PALAU', 'PW', 'pw.png'),
(165, 'PALESTINIAN TERRITORY, OCCUPIED', 'PS', 'ps.png'),
(166, 'PANAMA', 'PA', 'pa.png'),
(167, 'PAPUA NEW GUINEA', 'PG', 'pg.png'),
(168, 'PARAGUAY', 'PY', 'py.png'),
(169, 'PERU', 'PE', 'pe.png'),
(170, 'PHILIPPINES', 'PH', 'ph.png'),
(171, 'PITCAIRN', 'PN', 'pn.png'),
(172, 'POLAND', 'PL', 'pl.png'),
(173, 'PORTUGAL', 'PT', 'pt.png'),
(174, 'PUERTO RICO', 'PR', 'pr.png'),
(175, 'QATAR', 'QA', 'qa.png'),
(176, 'REUNION', 'RE', 're.png'),
(177, 'ROMANIA', 'RO', 'ro.png'),
(178, 'RUSSIAN FEDERATION', 'RU', 'ru.png'),
(179, 'RWANDA', 'RW', 'rw.png'),
(180, 'SAINT HELENA', 'SH', 'sh.png'),
(181, 'SAINT KITTS AND NEVIS', 'KN', 'kn.png'),
(182, 'SAINT LUCIA', 'LC', 'lc.png'),
(183, 'SAINT PIERRE AND MIQUELON', 'PM', 'pm.png'),
(184, 'SAINT VINCENT AND THE GRENADINES', 'VC', 'vc.png'),
(185, 'SAMOA', 'WS', 'ws.png'),
(186, 'SAN MARINO', 'SM', 'sm.png'),
(187, 'SAO TOME AND PRINCIPE', 'ST', 'st.png'),
(188, 'SAUDI ARABIA', 'SA', 'sa.png'),
(189, 'SENEGAL', 'SN', 'sn.png'),
(190, 'SEYCHELLES', 'SC', 'sc.png'),
(191, 'SIERRA LEONE', 'SL', 'sl.png'),
(192, 'SINGAPORE', 'SG', 'sg.png'),
(193, 'SLOVAKIA', 'SK', 'sk.png'),
(194, 'SLOVENIA', 'SI', 'si.png'),
(195, 'SOLOMON ISLANDS', 'SB', 'sb.png'),
(196, 'SOMALIA', 'SO', 'so.png'),
(197, 'SOUTH AFRICA', 'ZA', 'za.png'),
(198, 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', 'GS', 'gs.png'),
(199, 'SPAIN', 'ES', 'es.png'),
(200, 'SRI LANKA', 'LK', 'lk.png'),
(201, 'SUDAN', 'SD', 'sd.png'),
(202, 'SURINAME', 'SR', 'sr.png'),
(203, 'SVALBARD AND JAN MAYEN', 'SJ', 'sj.png'),
(204, 'SWAZILAND', 'SZ', 'sz.png'),
(205, 'SWEDEN', 'SE', 'se.png'),
(206, 'SWITZERLAND', 'CH', 'ch.png'),
(207, 'SYRIAN ARAB REPUBLIC', 'SY', 'sy.png'),
(208, 'TAIWAN, PROVINCE OF CHINA', 'TW', 'tw.png'),
(209, 'TAJIKISTAN', 'TJ', 'tj.png'),
(210, 'TANZANIA, UNITED REPUBLIC OF', 'TZ', 'tz.png'),
(211, 'THAILAND', 'TH', 'th.png'),
(212, 'TOGO', 'TG', 'tg.png'),
(213, 'TOKELAU', 'TK', 'tk.png'),
(214, 'TONGA', 'TO', 'to.png'),
(215, 'TRINIDAD AND TOBAGO', 'TT', 'tt.png'),
(216, 'TUNISIA', 'TN', 'tn.png'),
(217, 'TURKEY', 'TR', 'tr.png'),
(218, 'TURKMENISTAN', 'TM', 'tm.png'),
(219, 'TURKS AND CAICOS ISLANDS', 'TC', 'tc.png'),
(220, 'TUVALU', 'TV', 'tv.png'),
(221, 'UGANDA', 'UG', 'ug.png'),
(222, 'UKRAINE', 'UA', 'ua.png'),
(223, 'UNITED ARAB EMIRATES', 'AE', 'ae.png'),
(224, 'UNITED KINGDOM', 'GB', 'gb.png'),
(225, 'UNITED STATES', 'US', 'us.png'),
(226, 'UNITED STATES MINOR OUTLYING ISLANDS', 'UM', 'um.png'),
(227, 'URUGUAY', 'UY', 'uy.png'),
(228, 'UZBEKISTAN', 'UZ', 'uz.png'),
(229, 'VANUATU', 'VU', 'vu.png'),
(230, 'VENEZUELA', 'VE', 've.png'),
(231, 'VIET NAM', 'VN', 'vn.png'),
(232, 'VIRGIN ISLANDS, BRITISH', 'VG', 'vg.png'),
(233, 'VIRGIN ISLANDS, U.S.', 'VI', 'vi.png'),
(234, 'WALLIS AND FUTUNA', 'WF', 'wf.png'),
(235, 'WESTERN SAHARA', 'EH', 'eh.png'),
(236, 'YEMEN', 'YE', 'ye.png'),
(237, 'YUGOSLAVIA', 'YU', 'yu.png'),
(238, 'ZAMBIA', 'ZM', 'zm.png'),
(239, 'ZIMBABWE', 'ZW', 'zw.png');

-- --------------------------------------------------------

--
-- Table structure for table `favourite`
--

CREATE TABLE `favourite` (
  `fav_id` int(11) NOT NULL,
  `station_id` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT '0',
  `fav_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `favourite`
--

INSERT INTO `favourite` (`fav_id`, `station_id`, `user_id`, `status`, `fav_date`) VALUES
(1, 3, 286, 0, '2020-04-05 09:26:42'),
(2, 4, 286, 1, '2020-04-05 09:31:46'),
(3, 10, 288, 1, '2020-04-29 07:08:52'),
(4, 10, 289, 1, '2020-04-29 09:21:46'),
(5, 7, 288, 1, '2020-04-29 11:21:10'),
(6, 10, 0, 1, '2020-04-30 10:45:50'),
(7, 10, 290, 1, '2020-04-30 16:07:49'),
(8, 6, 290, 1, '2020-04-30 16:17:09'),
(9, 0, 290, 0, '2020-04-30 16:20:15');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `thumbnailImage` varchar(5000) NOT NULL,
  `featured` int(11) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT '1',
  `alias` varchar(255) NOT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `category_name`, `thumbnailImage`, `featured`, `status`, `alias`, `createDate`) VALUES
(1, 'Alternative', '54808_alternative.jpg', 1, 1, '1-alternative', '2018-11-05 09:49:49'),
(2, 'R&B', '57659_reggae.png', 0, 1, '2-r-b', '2018-11-05 09:54:18'),
(4, 'Christian&Gospel', '68640_christian.png', 1, 1, '4-christian-gospel', '2018-11-05 09:56:22'),
(5, 'Rock Alternativ', '30670_rock.png', 0, 1, '5-rock-alternativ', '2018-11-05 09:57:01'),
(6, 'Reggae', '25698_reggae.png', 0, 1, '6-reggae', '2018-11-05 09:57:23'),
(7, 'Country', '75474_2597_country.png', 1, 1, '7-country', '2018-11-05 09:57:50'),
(8, 'Stage and Screen', '93536_singer-songwriter.jpg', 0, 1, '8-stage-and-screen', '2018-11-05 09:58:30'),
(9, 'Singer / Song Writer', '78564_singer-songwriter.jpg', 0, 1, '9-singer-song-writer', '2018-11-05 09:58:50'),
(10, 'Experimental', '95535_experiment.jpg', 0, 1, '10-experimental', '2018-11-05 09:59:10'),
(11, 'Americana', '76199_world.jpg', 0, 1, '11-americana', '2018-11-05 09:59:34'),
(12, 'Urbano Latino', '17016_latin.jpg', 0, 1, '12-urbano-latino', '2018-11-05 09:59:55'),
(13, 'Holiday', '91839_holiday.jpg', 0, 1, '13-holyday', '2018-11-05 10:00:19'),
(14, 'Classic Rock', '79983_classical.png', 0, 1, '14-classic-rock', '2018-11-05 10:00:40'),
(15, 'Blues', '1315_blues.png', 0, 1, '15-blues', '2018-11-05 10:01:04'),
(16, 'Metal', '86154_metal.png', 0, 1, '16-metal', '2018-11-05 10:01:19'),
(17, 'Hard Rock', '45104_hip-hop.jpg', 0, 1, '17-hard-rock', '2018-11-05 10:01:41'),
(18, 'Electronic', '55041_romantic.jpg', 0, 1, '18-electronic', '2018-11-05 10:02:06'),
(19, 'Oldies', '72344_sex-you-up.jpg', 0, 1, '19-oldies', '2018-11-05 10:02:45'),
(20, 'Kids & family', '5947_indie.png', 0, 1, '20-kids-family', '2018-11-05 10:03:11'),
(21, 'Hip-Hop/Rap', '7650_hip-hop.jpg', 0, 1, '21-hip-hop-rap', '2018-11-05 10:03:30'),
(22, 'Punjabi', '99230_dancer.jpg', 0, 1, '22-punjabi', '2018-11-14 06:53:40'),
(23, 'Sufi', '46954_53308_nusrat-fateh-ali-khan.jpg', 0, 1, '23-sufi', '2018-11-16 05:55:25'),
(24, 'Bollywood', '98312_200554821-037-58b9e0b33df78c353c4e85c4.jpg', 0, 1, '24-bollywood', '2018-11-20 10:08:43');

-- --------------------------------------------------------

--
-- Table structure for table `setting`
--

CREATE TABLE `setting` (
  `id` int(11) NOT NULL,
  `company` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `thumbnailImage` varchar(500) NOT NULL,
  `contact_1` varchar(255) NOT NULL,
  `contact_2` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `about` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setting`
--

INSERT INTO `setting` (`id`, `company`, `user_name`, `email`, `thumbnailImage`, `contact_1`, `contact_2`, `address`, `city`, `country`, `about`) VALUES
(1, 'iTuneOn', 'brij@gmail.com', 'brij@gmail.com', '', '2147483647', '4564545645', 'SCF 53 phase 2 mohali punjab', 'Mohali', 'India', 'Hi I am using iTuneOn its cool ..:');

-- --------------------------------------------------------

--
-- Table structure for table `station`
--

CREATE TABLE `station` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `stream` varchar(500) NOT NULL,
  `thumbnailImage` varchar(5000) NOT NULL,
  `country_id` int(11) NOT NULL DEFAULT '0',
  `cat_id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `featured` int(11) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT '1',
  `views` int(50) NOT NULL DEFAULT '0',
  `alias` varchar(255) NOT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `station`
--

INSERT INTO `station` (`id`, `title`, `description`, `stream`, `thumbnailImage`, `country_id`, `cat_id`, `type`, `featured`, `status`, `views`, `alias`, `createDate`) VALUES
(3, 'Punjabi Beats', 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.', 'http://radio.esplservers.com:8334/stream', '23236_24145_90145_22354686549_24b12eef5c_b.jpg', 163, 12, 'mp3', 1, 1, 4, '4-Punjabi-Beats', '2018-11-14 06:54:29'),
(4, 'Best of Satinder Sartaj', 'Dr. Satinder Sartaaj (born 31 August 1982), born as Satinder Pal Singh Saini in a Punjabi Saini family, is an Indian Punjabi singer, song writer, actor and poet. He has sung many Sufi songs.[1][2] He gained fame with his hit song \"Sai\". Since then his pop', 'http://radio.esplservers.com:8334/stream', '48532_66787_10601_maxresdefault.jpg', 81, 23, 'mp3', 1, 1, 1, '4-Best-of-Satinder-Sartaj', '2018-11-16 05:57:02'),
(5, 'Best of Amrinder Gill', 'Amrinder Singh Gill is a Punjabi singer, songwriter, actor and film producer owning his production house Rhythm Boyz Entertainment. He started his singing career in 2000 with the album \"Apni Jaan Ke\". He is one of the most commercially successful Punjabi ', 'http://radio.esplservers.com:8338/stream', '40762_14361_31948_amrinder.jpg', 224, 22, 'mp3', 1, 1, 1, '5-Best-of-Amrinder-Gill', '2018-11-16 06:01:31'),
(6, 'Universal Radio Network', 'Universal Broadcasting Network Radio. ... NBC Universal, which includes the E! network, and Griffin representatives did not immediately return a request for ..', 'http://radio.esplservers.com:8668/stream', '16735_34722_40325_a.jpg', 225, 7, 'mp3', 1, 1, 0, '6-Universal-Radio-Network', '2018-11-16 06:09:30'),
(7, 'Jagat Radio', 'Welcome To Our Online Radio Station - The Best WorldWide Punjabi Music Hits For Our Listeners. Only On Jagat Radio Whatsapp Number +44 7459 313233 ...', 'http://equinox.shoutca.st:8183/stream', '43130_69345_61325_maxresdefault.jpg', 224, 22, 'mp3', 1, 1, 8, '7-Jagat-Radio', '2018-11-16 06:12:37'),
(8, 'Radio HSL India No.1 ', 'Radio HSL is the means of communication among most of the listened radio in the center of the country and this is certainly one of the most listened radio station of the country too with a big listener base of its own. Radio HSL generates their signal for', 'http://50.7.68.251:7064/stream', '68585_74960_79101_91705_download.jpg', 100, 24, 'mp3', 1, 1, 0, '8-Radio-HSL---Indias-No.1-', '2018-11-20 10:11:12'),
(9, 'Punjab Rocks Radio', 'Punjab Rocks is a 24 hours live non stop Indian and Pakistani based Punjabi music oriented popular online radio station. The radio loves to hear the opinion of their listeners about Punjab Rocks songs. Punjabi pop music is basically a own traditional styl', 'http://192.151.153.234:9988/punjab', '22955_7034_25329_download.jpg', 100, 22, 'mp3', 1, 1, 0, '9-Punjab-Rocks-Radio', '2018-11-20 10:17:22'),
(10, 'Bol Punjabi Radio', 'à¨¬à©‹à¨² à¨ªà©°à¨œà¨¾à¨¬à©€ à¨°à©‡à¨¡à©€à©³â„¢ - Dedicated to Punjab, Punjabis and Punjabizam. Now you can hear new Punjabi songs on our radio. Khush Raho !!!', 'http://149.56.195.94:8322/bolpunjabiradio', '83891_740x444.png', 100, 22, 'mp3', 1, 1, 5, '10-Bol-Punjabi-Radio', '2018-11-20 10:55:53'),
(11, 'Radio Punjabi Virsa', 'Radio Punjabi Virsa is a Punjabi Fm radio having broadcasting from Punjab.Listen to Radio Punjabi Virsa Punjabi FM to listen to your favorite Punjabi songs and top punjabi songs.Radio Punjabi Virsa contains a huge variety of programs telcasing wonderful P', 'http://stream.zenolive.com/25h82wv629duv', '52291_2qpfpewlq4ys.png', 224, 22, 'mp3', 1, 1, 2, '11-Radio-Punjabi-Virsa', '2018-11-22 07:39:38'),
(12, 'Radio City Punjabi FM', 'Radio City is a Punjabi Fm radio having broadcasting from Punjab.Listen to Radio City Punjabi FM to listen to your favorite Punjabi songs and top punjabi songs.Radio City contains a huge variety of programs telcasing wonderful Punjabi songs.Tune to Radio ', 'https://prclive4.listenon.in/Punjabi', '22143_65350_75320_radiocity.jpg', 100, 22, 'mp3', 1, 1, 5, '12-Radio-City-Punjabi-FM', '2018-11-22 07:46:07'),
(13, 'Khalsa FM Punjabi', 'Khalsa FM is a Punjabi Fm radio having broadcasting from Punjab.Listen to Khalsa FM Punjabi FM to listen to your favorite Punjabi songs and top kollywood songs.Khalsa FM contains a huge variety of programs telcasing wonderful Punjabi songs.Tune to Khalsa ', 'http://198.178.123.8:7798/;stream.mp3', '18505_89862_57131_KHALSA-FM-Punjabi.jpg', 38, 22, 'mp3', 1, 1, 19, '13-Khalsa-FM-Punjabi', '2018-11-22 07:49:25'),
(14, ' Radio Virsa Punjabi', 'Radio Virsa is a Punjabi Fm radio having broadcasting from Punjab.Listen to Radio Virsa Punjabi FM to listen to your favorite Punjabi songs and top punjabi songs.Radio Virsa contains a huge variety of programs telcasing wonderful Punjabi songs.Tune to Rad', 'http://stream.zenolive.com/6be9v08pnyduv', '13821_46038_512x512bb1.jpg', 154, 22, 'mp3', 1, 1, 45, '14-Radio-Virsa-Punjabi', '2018-11-22 07:55:19'),
(15, 'Indian Hindi Desi Bollywood Evergreen Hits', 'This is an internet broadcaster focused on Hindi and Bollywood music. Hindi Desi Bollywood Evergreen Hits Radio broadcasts from India and its schedule is on air 24 hours a day, 7 days a week.', 'http://192.240.102.133:11454/stream/', '31897_Hindi Desi Bollywood Evergreen Hits Online.jpg', 13, 24, 'mp3', 1, 1, 0, '15-indian-hindi-desi-bollywood-evergreen-hits', '2019-08-09 06:46:37'),
(17, 'Planet Radio City Hindi', 'Listen to Planet Radio City Hindi via onlineradios.in. With a simple click you can listen to the best live radio stations from India.', 'http://prclive1.listenon.in:9960/;', '95548_icon09.jpg', 100, 24, 'mp3', 1, 1, 0, '17-planet-radio-city-hindi', '2019-08-09 07:29:03'),
(19, 'Bombay Beats India', 'Listen to Bombay Beats India via onlineradios.in. With a simple click you can listen to the best live radio stations from India.', 'http://sc-bb.1.fm:8017/;', '91673_download.png', 223, 24, 'mp3', 1, 1, 0, '19-bombay-beats-india', '2019-08-09 07:32:14'),
(20, 'Listen to Arijit Singh Hindi', 'Arijit Singh is a Hindi Fm radio having broadcasting from India.Listen to Arijit Singh Hindi FM to listen to your favorite Hindi songs and top bollywood songs.Arijit Singh contains a huge variety of programs telcasing wonderful Hindi songs.Tune to Arijit ', 'http://southradios.net:9090/arijitsinghradio', '28032_download.jpg', 58, 24, 'mp3', 1, 1, 0, '20-listen-to-arijit-singh-hindi', '2019-08-12 07:23:34'),
(21, 'Listen to AR Rahman Hindi Hits', 'AR Rahman is a Hindi Fm radio having broadcasting from India.Listen to AR Rahman Hindi FM to listen to your favorite Hindi songs and top bollywood songs.AR Rahman contains a huge variety of programs telcasing wonderful Hindi songs.Tune to AR Rahman listen', 'http://southradios.net:9090/arrahmanhindiradio', '99618_10-Songs-By-A.-R.-Rahman-That-Make-Him-The-God-Of-Music-768x514.jpg', 47, 24, 'mp3', 1, 1, 0, '21-listen-to-ar-rahman-hindi-hits', '2019-08-12 07:26:52'),
(22, 'Listen to Best of Indie Pop Bollywood Radio', 'Best of Indie Pop Bollywood is a bollywood music radio having broadcasting from Los angels.Listen to Best of Indie Pop Bollywood radios and FM to listen to your favorite Hindi and bollywood songs and top bollywood songs.Best of Indie Pop Bollywood contain', 'http://103.16.47.70:7111/;stream.mp3', '23444_top-20-alto.jpg', 10, 24, 'mp3', 1, 1, 0, '22-listen-to-best-of-indie-pop-bollywood-radio', '2019-08-12 07:32:11'),
(23, 'Listen to Ever Green Bollywood Radio', 'Ever Green Bollywood is a bollywood music radio having broadcasting from India.Listen to Ever Green Bollywood radios and FM to listen to your favorite Hindi and bollywood songs and top bollywood songs.Ever Green Bollywood contains a huge variety of progra', 'http://103.16.47.70:7555/;stream.mp3', '99221_1200_110627-8240-Myst.jpg', 100, 5, 'mp3', 1, 1, 0, '23-listen-to-ever-green-bollywood-radio', '2019-08-12 07:34:10'),
(33, 'Radio Dhaakad', 'Dhaakad Haryana DhaakadBoli Dhaakad Log Dhaakad Radio', 'http://radiodhaakad.com:8000/live', '41716_maxresdefault (1).jpg', 100, 7, 'mp3', 0, 1, 0, '33-radio-dhaakad', '2019-08-16 07:20:14'),
(35, 'Radio India', 'Based in Surrey, Canada, Online Radio India is a web radio station that serves the South Asian Community. Its schedule focuses mostly on news, information and music contents, ranging from the classics to the latest music hits.', 'http://162.244.80.52:4614/;stream.mp3', '75337_98f474bb16134fae0cfc1e02bbd65f18.jpg', 100, 7, 'mp3', 0, 1, 0, '35-radio-india', '2019-08-16 07:34:14'),
(36, 'Ujala Radio FM Hindi', 'Listen to Ujala Radio FM Hindi via onlineradios.in. With a simple click you can listen to the best live radio stations from India.', 'http://stream2.ujala.nl/stream/2/listen.mp3', '62335_c023d94adaebfaadeb1ca56175d59653.jpg', 151, 24, 'mp3', 0, 1, 0, '36-ujala-radio-fm-hindi', '2019-08-20 11:56:56'),
(37, 'Bombay Beats Hindi', 'Listen to Bombay Beats India via onlineradios.in. ... this radio station features the best of Filmi songs, dance routines and Hindi-pop from the Mumbay film scene.', 'http://sc-bb.1.fm:8017/;', '84782_R-2506783-1464656894-1922.jpeg.jpg', 206, 24, 'mp3', 0, 1, 0, '37-bombay-beats-hindi', '2019-08-20 12:00:45'),
(38, 'Meethi Mirchi', 'Free listen online to Meethi Mirchi in good quality from India. Internet Meethi Mirchi live stream. At this station, for you, plays the best bollywood, pop content.', 'https://meethimirchihdl-lh.akamaihd.net/i/MeethiMirchiHDLive_1_1@320572/master.m3u8', '60299_5024eba2771b55605ef5e4b88d7f51a3.jpg', 100, 24, 'hls', 0, 1, 0, '38-meethi-mirchi', '2019-08-20 12:04:20'),
(39, 'Dhol Radio', 'Listen to Dhol Radio Hindi via onlineradios.in. With a simple click you can listen to the best live radio stations from India.', 'http://gill.sukhpal.net:8000/;', '59388_unnamed.png', 100, 24, 'mp3', 0, 1, 0, '39-dhol-radio-hindi', '2019-08-20 12:09:26'),
(40, 'Apna 990 AM Hindi', 'Listen to Apna 990 AM Hindi via onlineradios.in. With a simple click you can listen to the best live radio stations from India.', 'http://s37.myradiostream.com:12108/stream/1/', '99302_downloadhg.jpg', 154, 24, 'mp3', 0, 1, 0, '40-apna-990-am-hindi', '2019-08-20 12:12:32'),
(41, 'Calm Radio Hindi', 'Listen to Calm Radio Hindi via onlineradios.in. With a simple click you can listen to the best live radio stations from India.', 'http://streams.calmradio.com:5328/stream', '9528_41jlXa22aDL._AC_UL320_.jpg', 38, 24, 'mp3', 0, 1, 0, '41-radio-tarana-hindi', '2019-08-20 12:14:43'),
(42, 'Radio Sangeet', 'Listen to Radio Sangeet via onlineradios.in. With a simple click you can listen to the best live radio stations from India.', 'http://media.guardian.co.tt:8000/sangeet106', '6302_df360d39a36d3840aef471b718b135b4.jpg', 100, 24, 'mp3', 0, 1, 0, '42-radio-sangeet', '2019-08-20 12:20:45'),
(43, 'Desi Music Mix India', 'isten to Desi Music Mix India via onlineradios.in. With a simple click you can listen to the best live radio stations from India.', 'http://66.23.234.242:8012/stream/1/', '68464_popular-10-radio-stations-in-india-18-638.jpg', 100, 24, 'mp3', 0, 1, 0, '43-desi-music-mix-india', '2019-08-20 12:22:33'),
(44, 'Galaxy Picosa FM', 'Enjoy here the most grumpy radio in Guatemala, with an extensive history of broadcasting in which it has brought joy, company, entertainment, news in a serious and professional tone, talk, entertainment and much more in 24-hour hours.', 'https://radios-gt.cdn.nedmedia.io/radios/gt/galaxia.m3u8', '67820_222222.jpg', 89, 1, 'hls', 0, 1, 0, '44-galaxy-picosa-fm', '2020-02-27 07:16:45'),
(45, 'Radio Panj', 'Sound of 5 Rivers - UK', 'http://s2.voscast.com:9612/', '42227_40389_radiopanj.jpg', 224, 2, 'mp3', 0, 1, 0, '45-radio-panj', '2020-04-05 06:20:19');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_setting`
--

CREATE TABLE `tbl_setting` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `description` varchar(2500) NOT NULL,
  `tracking_id` varchar(255) NOT NULL,
  `adstop` blob NOT NULL,
  `adsright` blob NOT NULL,
  `adsbottom` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_setting`
--

INSERT INTO `tbl_setting` (`id`, `title`, `logo`, `email`, `contact`, `description`, `tracking_id`, `adstop`, `adsright`, `adsbottom`) VALUES
(1, 'Online Radios - FM radio stations live on internet', '67347_radio.png', 'info@artbit.com', '1234567886', 'All major Indian FM radio stations ready for you to enjoy free music and much more. Online radio in English.', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idu` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(256) NOT NULL,
  `first_name` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `DOB` date DEFAULT '0000-00-00',
  `country` varchar(64) NOT NULL,
  `image` varchar(128) NOT NULL,
  `gender` varchar(5) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idu`, `email`, `password`, `first_name`, `last_name`, `DOB`, `country`, `image`, `gender`, `create_at`) VALUES
(279, 'brij@gmail.com', '$2y$10$YyV0sFBQaZc.ubUSPwavkehRTKDHrz4gXuY./DWzXSf2YmfGdtuWO', 'brij', 'mohan', '0000-00-00', 'India', '1586071614.jpg', 'male', '2020-04-05 07:26:54'),
(280, 'brij1234@gmail.com', '$2y$10$bVY0DnpeDVCCNWuBo1pzPe/pGjG.jH5TLi0Oglwz.esOTEgyw5pVK', 'brij', 'mohan', '0000-00-00', 'India', '1586071665.jpg', 'male', '2020-04-05 07:27:45'),
(281, 'brij123@gmail.com', '$2y$10$NrYOiqZyIsOHUFIT8enfVOrk9pxjNJ67Na.G/s3O5VYScibfo3T3C', 'brij', 'mohan', '0000-00-00', 'India', '1586072224.jpg', 'male', '2020-04-05 07:37:04'),
(282, 'brij12@gmail.com', '$2y$10$z72SlHOOAdfK3EZnnRf/ReGOOjmEJaX584/fH7lLfOB2L/yxWI7Ui', 'brij', 'mohan', '0000-00-00', 'India', '1586072262.jpg', 'male', '2020-04-05 07:37:42'),
(283, 'brij1212@gmail.com', '$2y$10$KG96kGzu8E8AzUrgrBTMAOjVefTmc6Dfh5WcOO1CrqcELv4Ts1bPS', 'brij', 'mohan', '0000-00-00', 'India', '1586072413.jpg', 'male', '2020-04-05 07:40:13'),
(284, 'brij12122@gmail.com', '$2y$10$3x7qvSdBO3mfNPZLWJGxmugVe0BbIxlVmEwe5pQonUpCAhHsiRRpK', 'brij', 'mohan', '0000-00-00', 'India', '1586072543.jpg', 'male', '2020-04-05 07:42:23'),
(285, 'brij121223@gmail.com', '$2y$10$G7BIExqTnaBz2ZN4iU3GSeAhlhm/x1uxdeDEtegzkbC6ui8QstC1S', 'brij', 'mohan', '0000-00-00', 'India', '1586072586.jpg', 'male', '2020-04-05 07:43:06'),
(286, 'brij1212jh23@gmail.com', '$2y$10$4/FAYSlCk7chsKxOsF8Mku8sTOap/6rDHmcUpJjjHPV.G6qBlR2bm', 'brij', 'mohan', '0000-00-00', 'India', '1586074658.jpg', 'male', '2020-04-05 08:17:38'),
(287, 'sandeep.sk0012@gmail.com', '$2y$10$bRI5jqYudoePKylARgNx9.448LloHK69zz9IyvK3CUQhR0L3lqF.6', 'Sandeep', 'Kashyap', '0000-00-00', 'India', '1587558818.jpg', 'Male', '2020-04-22 12:33:38'),
(288, 'sa@gmail.com', '$2y$10$iw.dU2DBydcizhI0/pIUzeKkeGAtFWAEkiv7lihYLFZEcKoORX8HK', 'sandeep', 'Kashyap', '0000-00-00', 'Algeria', '1587559465.jpg', 'Male', '2020-04-22 12:44:25'),
(289, 's@s.com', '$2y$10$x1U7w/YkuhjVLdBJJ7V/4.8GrxZrHtK.fkLIhIA7CP4R2KYgL/O5.', 'Rehmat', 'Singh', '0000-00-00', 'India', '1588151150.jpg', 'Male', '2020-04-29 09:05:50'),
(290, 'sekhons@yahoo.com', '$2y$10$Enta2CYjm4CKdRIlhiqDvO9vPi7w0dUJ6EVR35Rc0jql6fNcSiXSK', 'bikram ', 'sekhon', '0000-00-00', 'India', 'default.png', 'Male', '2020-04-30 16:07:18');

-- --------------------------------------------------------

--
-- Table structure for table `views`
--

CREATE TABLE `views` (
  `id` int(11) NOT NULL,
  `by` int(11) NOT NULL,
  `track` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_user`
--
ALTER TABLE `admin_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `favourite`
--
ALTER TABLE `favourite`
  ADD PRIMARY KEY (`fav_id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `setting`
--
ALTER TABLE `setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `station`
--
ALTER TABLE `station`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_std_id` (`cat_id`);

--
-- Indexes for table `tbl_setting`
--
ALTER TABLE `tbl_setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `id` (`idu`);

--
-- Indexes for table `views`
--
ALTER TABLE `views`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_user`
--
ALTER TABLE `admin_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=240;

--
-- AUTO_INCREMENT for table `favourite`
--
ALTER TABLE `favourite`
  MODIFY `fav_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `setting`
--
ALTER TABLE `setting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `station`
--
ALTER TABLE `station`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `tbl_setting`
--
ALTER TABLE `tbl_setting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=291;

--
-- AUTO_INCREMENT for table `views`
--
ALTER TABLE `views`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `station`
--
ALTER TABLE `station`
  ADD CONSTRAINT `fk_std_id` FOREIGN KEY (`cat_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
