import React from 'react';
import './FrontCarousel.css';

class FrontCarousel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <p className="row-header-title">Popular on Netflix</p>
            <div className="wrapper">
            
                <section id="section1">
                    <a href="#section3">‹</a>
                    <div className="item item1">
                    <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWbSUx5QJxrOAVr1TkWt-8V5y20EmnwNcQBePFxVm-L6LeCNvrZoF8c4j7i1g8WS5LKg6ym9TEuX4Fzt5FKAxVDKuLAemy0nn-TwYukSwXrTz4CWXPKJIddblPLVTbcbVFLlTYHHiHCkwHJDSTPpGTGO5Kv0j1dNvzlIP1hjjQskU837EqpzuO08zp0P.webp?r=94e" alt="Movie"/>
                    </div>
                    <div className="item item2">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABesO1KSk2xT-H6fhZEDQDl0N3R0lLpvLCYLcspei0AKYENpGzthfR2d_cT038mtFw7u4AoXWmEQhztlaE2G8eot9TFkK-ZlYrSFxxpY14n9f8zc_Mop8cLhpTjVA3F4BkKVsxO0uQpUTELXsNLa_zh4oGjI5ZR9YYODDynxZ171euddx0liD8Go.jpg?r=30b" alt="Movie"/>    
                    </div>
                    <div className="item item3" >
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWHB5gbLZ20ebcv2XxUGaXND2i95PJb-SGgV3WOz5i8g_-vGCfrJfXwm2Lf1qTCka113YDZxHhiBuqoawhdjHWxwr74.webp?r=3d7" alt="Movie"/>    
                    </div>
                    <div className="item item4">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXXosQ0VxlsQ1nqd3jpzgCra0jubbkEb-TZfVtD6dEcjm9uRQK-h2mo5DQDBTTAspexeMyE2kZARc3lENcyWX8Z3k70XVzpleB5QpjRWvfPW6dS-6SlyBhzsbk_6.jpg?r=eda" alt="Movie"/>    
                    </div>
                    <a href="#section2">›</a>
                </section>
                
                <section id="section2">
                    <a href="#section1">‹</a>
                    <div className="item item1">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVrumqcaFVIz8zs_Nb2Uay8MhLVvH-Y1Vt9odpqMFU03Yyw4PgAl0D94CKcULvApLsE8RQdLR0a_Vh5rvsi0NgOS8eNxloHbq80GhNIIwF1aDYdkHIZ3fd1DT5_MwJhj9XIWFL7lcaVZUqFFb9Vr6Zd5bs9Km_9JOp4nDNmarC5Ot8fZSwzQlBU.jpg?r=916" alt="Movie"/>
                    </div>
                    <div className="item item2">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYUbBi6uLAyY6t8Q_n-8GmLbs0qU2c6VT3VQRtqnQeCcJ35w8okfKpYXqptYyZu1kOIn7GWKhx7kRikCybsA88rKv_TIJoopSZCI2wgmKdnLivrhF7dEoEDVViMK.jpg?r=04e" alt="Movie"/>    
                    </div>
                    <div className="item item3">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUMG34BFCEH7wAF1AYglEeiYAJdfsf2WyzmwluW6pK7J2uFKg-JSiPtUlzpzXZHHUrZwq_VAtq4PHssF6Xm8havj3PYzpo9DnfBh0YseOanTw-Y6juHSkCezYy8Y.jpg?r=9fb" alt="Movie"/>    
                    </div>
                    <div className="item item4">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeJEHNoKfZkr67sPPXA4X5IsQk8LhcIIY5rNRnc4_oD7geHqmpXJ_FQUJWwaSY9zNzwQW8O_kZHY-8IriK0aoiCKrD4.webp?r=636" alt="Movie"/>    
                    </div>
                    <a href="#section3">›</a>
                </section>    

                <section id="section3">
                    <a href="#section2">‹</a>
                    <div className="item item1">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdvFFx_y-SZ14vSaBSK-TQwOzlYZ4-TwcaaArmwKuI7vnjAbNbgrCHHTWQMRx_NbccxsUm15M5JFcBEMYhtaSUnokobvX51Yfe9htNq7MdhpYfSp8esiYWeYvAAv.jpg?r=b0c" alt="Movie"/>
                    </div>
                    <div className="item item2">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdVmXs3e6R-Jq3ljS0vgaIFThqN40CfU7vVf64XF54_7Ey_P5Qd0nvAm6bu30souhnWVXh_1eZSln4s35pfuTRzpgJWXMyLaNw6sXrsHtSED93M_xEeXmQU8urd6.jpg?r=5f7" alt="Movie"/>    
                    </div>
                    <div className="item item3">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSfBjnt8qLuo3RYw1F-x17t92aeuk5XN4jhtsZuFF1nbPvHHmFHqjr2XJVEt5VMn239kI3d0VrZ-Zjs56qpTygO9GHNndzGTpPGhuDtDNSg-X-_yNumyYEkiM-Dj.jpg?r=70d" alt="Movie"/>    
                    </div>
                    <div className="item item4">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfAKyiPcylbCAcgy8LK5rMUfB4vjNMwmKKbTw_LYuRgGJPFF-xoTitCBHY_eV76_TGcjxvS43hFlc_ehABbj2LzhTto7OewcPnHDkh6MGxi8DNHn7GtTFRqH8s7P.jpg?r=957" alt="Movie"/>    
                    </div>
                    
                    <a href="#section1">›</a>    
                </section>

               
            </div>
            <p className="row-header-title">Trending Now</p>
            <div className="wrapper">
            
                <section id="section4">
                    <a href="#section6">‹</a>
                    <div className="item item1">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXxz3x0n5Iu2Hg_rLzzy1mQ24R7vS2B9ZniNwvSsFZ6F8cef7DEjhXs4rQrQjpPtpWwOA0uBb5V6eyLSBy22BEm8RIc.webp?r=abb" alt="Movie"/>
                    </div>
                    <div className="item item2">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZDqvfEwLsUkdiivYcp4CXGGL5siMo25DwJ8aEHss7CYKvgzrfAYXyZXisc-ESCde28rr_rHQNVodBKHmcKw2dlWAcMU-udu0osVDhWHD_CVrR1VxAdft6JayQen.jpg?r=687" alt="Movie"/>    
                    </div>
                    <div className="item item3">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBSuq7l3wYXRzYfm1NiFSkaX5DF00Gi8Qw0oR6tw_G-fS0PP52sSnCTjd32zkVCikB_JytW-RXP-0nZoh49UIPq1DS3IybdCWDNIc1tNj27R2oixpX9VXhHSU6q.jpg?r=083" alt="Movie"/>    
                    </div>
                    <div className="item item4">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUjsKDiaKwLmrV662pwmVKEtRmbJI-s8M9ojCqr2QEdnPUJPX86RP-n9IGXxGcaHWkTf-cwz5e4kBLN3jYLM7HuBfYA.webp?r=01d" alt="Movie"/>    
                    </div>
                    <a href="#section5">›</a>
                </section>
                
                <section id="section5">
                    <a href="#section4">‹</a>
                    <div className="item item1">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbMj-JQVdgiFf31_XoinyBI3WoWVSPKRdrdZVqlvFU2o10FN7RBcnFgTo3CDNxeXC60GZRofcw91NOIOmO4FddlIqDI.webp?r=1d3" alt="Movie"/>
                    </div>
                    <div className="item item2">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf7JeB1qBa3RmDNXqcaY4GwQPDB0fA4f3osxRK9-2d0ntPLqiQYFcbjNVp8AW8eTBfdDz-aF7QA2RgwVxgWOcF08bXJfO2xIKRfa9S9mzeHikH0fLY8swW15x-H2.jpg?r=ce8" alt="Movie"/>    
                    </div>
                    <div className="item item3">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZdRLDSTTAtXLlv2B-hn7WWOH1u3y9X4uicVQH3BiCFgYN5pVs1HdvABfy1kauJr7GIxD2wD68Z5VxDW5wg2r3eBJkFlku5hiO7B2nfiushJcCEggf9vcJRxPoJX.jpg?r=8c0" alt="Movie"/>    
                    </div>
                    <div className="item item4">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXu8kVcR1ZqKo7RxFCRmyvX-tSgItSrHDvTN8B0Q4gp81d4WOsH6xKgkpptHRU1wTYUQKIpTRUPdjQjmuzRmNlCa818.webp?r=89b" alt="Movie"/>    
                    </div>
                    <a href="#section6">›</a>
                </section>    

                <section id="section6">
                    <a href="#section5">‹</a>
                    <div className="item item1">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQA-pQWie_MGCAde-PzelKPCRcBO7P7Xp6tIj8RmFB_abwmlNE7eohiKYdW6eFT9anKWsepR8Or0uzDYLpKriwoPmCw.webp?r=011" alt="Movie"/>
                    </div>
                    <div className="item item2">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWX82HJukS7CYRZIYowpO2F0p3MsCcobKTsz2NtHMtL_zZCH6JXWWoOJQ3xOLp9T3zr1YM_JqbsXXiymibl6ZnqInbI.webp?r=2aa" alt="Movie"/>    
                    </div>
                    <div className="item item3">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY1lhrLw22jgwYvZSi7tHkWELM0AmOMDnt-UK1UVz_aZurSWTT80xjhv2CRGGhNF3UVixZ3FazHQJbE-eku07usQ_Vg.webp?r=589" alt="Movie"/>    
                    </div>
                    <div className="item item4">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABREMO-ryYsa8h6V60rqtjq9QKWjNuNLp7rIgTkoYbeogvMUjqTyEdY3paldKVp6Xem1B1a_mQh5ImXS69RCvWRg3T6cQ5HxGrRFLUGx5goina4jZlmEgl_Pqo8A9.jpg?r=55e" alt="Movie"/>    
                    </div>
                    
                    <a href="#section4">›</a>    
                </section>

               
            </div>

            <p className="row-header-title">Netflix Originals</p>
            <div className="wrapper">
            
                <section id="section7">
                    <a href="#section9">‹</a>
                    <div className="item item1">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRPnYREuSwXXq5mbVbwSb0ma_OOd6BHJheRorgdoi4d3UJkgvSCAMPStaR6D38haMjjlbKFjBUAMtxVFqsj7d8l67qxB5Tp3AhkxGxclzOUqV5V5WMql2NJwM_kd.jpg?r=826" alt="Movie"/>
                    </div>
                    <div className="item item2">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZCdcvTKbXwrynz4S4zp63p98RDRdvb1LGt_lrC7cLkHCJo-DHMAfllSaXxejpDjhBqIvlEqCat6ZUCveswb_tC7NtbcAImSJOr-LohI5lc357eBB3YtNodhGlkE.jpg?r=01e" alt="Movie"/>    
                    </div>
                    <div className="item item3">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRU2TilOOQOYct0Vc9qDRv2yyJDFwpN6sagdiNwSK2_ijTP912OzKIfb_avFY3NTf2hfTVbqTsBMYJ0vShmVAQIOup4.webp?r=40b" alt="Movie"/>    
                    </div>
                    <div className="item item4">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSUvPO7op4uEk92PzuK5SUpNq7aLqsdr1d1DZI-IHRSKv4wODV30ujfU1CjvraFLjY8GBTwMNjZc5xPS_8PFeYO8BSc.webp?r=192" alt="Movie"/>    
                    </div>
                    <a href="#section8">›</a>
                </section>
                
                <section id="section8">
                    <a href="#section7">‹</a>
                    <div className="item item1">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXniQL4vOKxHvvMwbdBvN8-ya7J9kg-b2Dt7jnZrSdJh00nBOKabUNS3YAZ3r8-Y782_tYYZdnFqMua0zWNs4DPTzL9q6EEq9zvp3KIc-NH89hB2wogJEwl7wP5v.jpg?r=842" alt="Movie"/>
                    </div>
                    <div className="item item2">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdoSrDktgNxpBGWciURaxEad1TG97jbqmi91OCudyQq4GCeDGWNp-XMMv-VNYOdVirUpDqIyHsuv2iMBKN6EprVIxN0aWMufYQ6wKobr3x0TkQCtbswYLn_TYZ2E.jpg?r=e4b" alt="Movie"/>    
                    </div>
                    <div className="item item3">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW0hEyNvRlA9VItn8gFnqsw98MxPkuDFVajE1R4XI-afTllo0E0alvKE1IK_J3IjTmZ0mLYGHItLqzA_CLp-6ygrH-XueNNRhZzN4AuzoRXHBChinBDhypgGGPjO.jpg?r=da1" alt="Movie"/>    
                    </div>
                    <div className="item item4">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT-ObSX17ha3dta774D0lbUwLReJLCDPER9-ogpffzTdJOjVq-ds6t4TojBe5WKDZtDQV06rdgr9FDnP4I6BZS1IPV1kmDazoK9W7TLVY_UTqlc9HTL9ZxglXDb3.jpg?r=4cd" alt="Movie"/>    
                    </div>
                    <a href="#section9">›</a>
                </section>    

                <section id="section9">
                    <a href="#section8">‹</a>
                    <div className="item item1">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABadmwExnOG92Q4bwx0zZsJmzbDyE34l_l458SAecFDweqx3Nw9OLI9_MkHQuNWTNrvgO_ngjxQ42_z_13-DlDluBVsBS5xIdZSHzbwxp1kBIt_rjeNNi1bMk0_UF.jpg?r=eba" alt="Movie"/>
                    </div>
                    <div className="item item2">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQwTbNvRDQz5arQchBdCJrayWNAOW1BG89frmaby8VduKj38KwBSXef2bac6IiuEXD9gSQ3uqVAFe4ydTif-yK4ZFhLMQUI0b7RxbA_YAqySPJmjYOU7NAY8Uyj6.jpg?r=fc2" alt="Movie"/>    
                    </div>
                    <div className="item item3">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRtwrwTt4dbh6fVcJskYTGA4gu-REuOFjk-NWP0LYWKRFCzh9At8S2lxQqo6CutQjpO1B2bh2EHRNWUMYQ-u6CDpV39RgkFNHvYZAJyB8xe9dPMD791E9n8pi65fWenCCENPvbE6vwB4CQT-qhLZ9ccao5o.webp?r=e00" alt="Movie"/>    
                    </div>
                    <div className="item item4">
                        <img src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc0MdwbSUrLEfwODwFVV8ijA5SyCY7vNdHWKNE3HLhG0laQn3_yHpwL27mKqJEreKbSt73dfywFZqUN3CFz2m8t-EiCjnTrgr4_k7zXPUMpYs_KeV90WencRgvV3.jpg?r=891" alt="Movie"/>    
                    </div>
                    
                    <a href="#section7">›</a>    
                </section>

               
            </div>

            </div>

            
        )
    }
}

export default FrontCarousel;


