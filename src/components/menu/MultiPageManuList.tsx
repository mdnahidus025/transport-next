"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MenuItem } from '@/contents/navmenu/navType';
import { blogList, homeList, pagesList, servicesList, shopList } from '@/contents/navmenu/navItem';

const MultiPageManuList: React.FC = () => {
    const currentPath = usePathname();
    const findLocation = (array: MenuItem[]): boolean => {
        return array.some(item => item?.url === currentPath);
    };
    return (
        <ul className="main-menu__list">
            <li className={`dropdown ${findLocation(homeList) ? "current" : ""}`}>
                <a href="#">Home </a>
                <ul className="shadow-box">
                    {
                        homeList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.url ? "current" : ""}><Link href={item?.url}>{item?.text}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={currentPath === "/inner/about" ? "current" : ""}>
                <Link href="/inner/about">About</Link>
            </li>
            <li className={`dropdown ${findLocation(pagesList) ? "current" : ""}`}>
                <a href="#">Pages</a>
                <ul className="shadow-box">
                    {
                        pagesList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.url ? "current" : ""}><Link href={item?.url}>{item?.text}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(servicesList) ? "current" : ""}`}>
                <a href="#">Services</a>
                <ul className="shadow-box">
                    {
                        servicesList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.url ? "current" : ""}><Link href={item?.url}>{item?.text}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(shopList) ? "current" : ""}`}>
                <a href="#">Shop</a>
                <ul className="shadow-box">
                    {
                        shopList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.url ? "current" : ""}><Link href={item?.url}>{item?.text}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(blogList) ? "current" : ""}`}>
                <a href="#">Blog</a>
                <ul className="shadow-box">
                    {
                        blogList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.url ? "current" : ""}><Link href={item?.url}>{item?.text}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={currentPath === "/inner/contact" ? "current" : ""}>
                <Link href="/inner/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default MultiPageManuList;