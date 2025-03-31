/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Gera arquivos HTML estáticos
    basePath: '/project1-2025a-dbseitenfus', // Substitua pelo nome do seu repositório no GitHub
    images: {
      unoptimized: true, // Desabilita otimização de imagens (necessário para export estático)
    },
  };
  
  export default nextConfig;